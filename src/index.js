const express = require('express');
const bodyparser = require('body-parser');

const routes = require('./routes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
const port = 3000;

app.use(bodyparser.json());

if (routes && routes.length) {
  routes.forEach((route) => app.use(route));
}

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});

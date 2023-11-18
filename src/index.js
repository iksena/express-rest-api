const express = require('express');
const routes = require('./routes');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendStatus(200).send('Hello World!');
});

if (routes && routes.length) {
  routes.forEach((route) => app.use(route));
}

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});

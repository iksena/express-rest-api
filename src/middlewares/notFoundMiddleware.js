const { Router } = require('express');

const NotFoundError = require('../errors/notFoundError');

const router = Router();

const notFoundMiddleware = (req, res, next) => {
  if (res.headersSent) {
    return next();
  }

  return next(new NotFoundError(`${req.method} ${req.url} not found`));
};

router.all('*', notFoundMiddleware);

module.exports = router;

const errorMiddleware = (error, req, res, next) => {
  const errorResponse = {
    code: error.code || 'GENERAL_ERROR',
    message: error.message || 'Something went wrong',
    statusCode: error.statusCode || 500,
  };

  res.status(error.statusCode || 500).send(errorResponse);

  next();
};

module.exports = errorMiddleware;

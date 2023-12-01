const BadRequestError = require('../errors/badRequest');

const withValidateSchema = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    next(new BadRequestError(error.message));
  }

  next();
};

module.exports = withValidateSchema;

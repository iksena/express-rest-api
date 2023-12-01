const BaseError = require('./baseError');

class BadRequestError extends BaseError {
  constructor(message, data) {
    super(
      message || 'Bad Request',
      'BAD_REQUEST',
      400,
      data,
    );
  }
}

module.exports = BadRequestError;

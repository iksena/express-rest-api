const BaseError = require('./baseError');

class NotFoundError extends BaseError {
  constructor(message, data) {
    super(
      message || 'Not Found',
      'NOT_FOUND',
      404,
      data,
    );
  }
}

module.exports = NotFoundError;

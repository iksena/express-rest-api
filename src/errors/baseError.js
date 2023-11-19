class BaseError extends Error {
  constructor(message = 'An error occurred', code = 'GENERAL_ERROR', statusCode = 500, data = {}) {
    super(message);
    this.code = code;
    this.description = message;
    this.statusCode = statusCode;
    this.data = data;
    this.serviceError = true;
  }
}

module.exports = BaseError;

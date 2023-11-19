class BaseError extends Error {
  code = 'GENERAL_ERROR';
  description = 'An error occurred';
  statusCode = 500;
  data = {};

  constructor(message, code, statusCode, data) {
    super(message);
    this.code = code;
    this.description = message;
    this.statusCode = statusCode;
    this.data = data;
  }
}

module.exports = BaseError;

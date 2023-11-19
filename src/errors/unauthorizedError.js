const BaseError = require('./baseError');

class UnauthorizedError extends BaseError {
  constructor(message, data) {
    super(message || 'Unauthorized', 'UNAUTHORIZED', 401, data);
  }
}

module.exports = UnauthorizedError;

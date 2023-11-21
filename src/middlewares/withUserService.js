const User = require('../models/user');
const UserService = require('../services/userService');

const withUserService = (req, res, next) => {
  const { placeService } = req.app;

  const userModel = new User();
  const userService = new UserService(userModel, placeService);

  req.app.userService = userService;

  next();
};

module.exports = withUserService;

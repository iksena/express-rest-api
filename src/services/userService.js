const BaseError = require('../errors/baseError');
const NotFoundError = require('../errors/notFoundError');

class UserService {
  userModel;

  constructor(userModel, placeService) {
    this.userModel = userModel;
    this.placeService = placeService;
  }

  signUp(payload) {
    const {
      name,
      email,
      password,
    } = payload;

    const user = this.userModel.getUserByEmail(email);
    if (user) {
      throw new BaseError('User is already registered', 'CONFLICT_USER', 409);
    }

    this.userModel.createUser({
      name,
      email,
      password,
    });
  }

  logIn(payload) {
    const { email, password } = payload;
    const user = this.userModel.getUserByEmail(email);

    if (!user) {
      throw new Error('User is not found');
    }

    if (user && user.password !== password) {
      throw new Error('Email/password is not correct');
    }

    return user;
  }

  getUser(userId) {
    const user = this.userModel.getUserById(userId);

    if (!user) {
      throw new NotFoundError('User is not found');
    }

    return user;
  }

  getUsers() {
    const users = this.userModel.getAllUsers();

    return users;
  }

  getPlacesByUserId(userId) {
    const user = this.getUser(userId);
    const places = user.places ?? [];

    return places.map((placeId) => this.placeService.getPlace(placeId));
  }
}

module.exports = UserService;

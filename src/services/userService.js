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
      throw new Error('User is not found');
    }

    return user;
  }

  getUsers() {
    const users = this.userModel.getAllUsers();

    return users;
  }

  getPlacesFromUser(userId) {
    const user = this.getUser(userId);

    return user.places.map((place) => this.placeService.getAddress(place.id));
  }
}

module.exports = UserService;

const { v4: uuidv4 } = require('uuid');

let usersData = [
  {
    id: '1',
    name: 'Sena',
    email: 'iksena@aol.com',
    password: 'P@ssw0rd123',
    places: ['1'],
  },
];

class User {
  createUser(payload) {
    const {
      name, email, password, places,
    } = payload;

    const user = {
      id: uuidv4(),
      name,
      email,
      password,
      places,
    };
    usersData.push(user);

    return user;
  }

  getAllUsers() {
    return usersData;
  }

  getUserById(userId) {
    const foundUser = usersData.find((user) => user.id === userId);

    return foundUser;
  }

  updateUserById(userId, payload) {
    const foundUser = this.getUserById(userId);

    if (!foundUser) {
      throw new Error('User is not found');
    }

    usersData = usersData.filter((user) => user.id !== userId);
    const updatedUser = {
      ...foundUser,
      ...payload,
    };
    usersData.push(updatedUser);

    return usersData;
  }
}

module.exports = User;

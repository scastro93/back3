class UserFactory {

  addUser(email, password) {
    return {
      id,
      email,
      password
    };
  }

  getUser(id) {
    return {
      id,
      email,
      password
    };
  }
}

module.exports = new UserFactory();


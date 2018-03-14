const formatHelper = require('../formatHelpers');

class UserFactory {
  addUser(params) {
    const { email, password} = params;

    const add = {
      email: email,
      password: password
    };

    return {
      query: `
        mutation {
          addUser(input: {
            ${add.email}
            ${add.password}
          }) {
            id,
            email,
            password
          }
        }
      `
    };
  }

  getUser(params) {
    const {id} = params;

    const get = {
      id: id
    }
    return {
      query: `
        query{
          getUser(input: {
            ${get.id}
          }){
            id,
            email,
            password
          }
        }
      `
    };
  }
}

module.exports = new UserFactory();

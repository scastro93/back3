const userTypes = require('./types/user');

const userDefs = `
  extend type Mutation {
    addUser(input: addUserInput!): User
    deleteUser(input: userId!): ListUser
  }

  extend type Query {
    getUser(input: userId!): User
  }
`;

module.exports = [userTypes, userDefs];

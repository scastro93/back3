const UserDefs = `
  type User {
    id: Int
    email: String
    password: String
  }
  input addUserInput {
    email: String
    password: String
  }
  input userId {
    id: Int!
  }
`;

module.exports = UserDefs;

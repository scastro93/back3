const UserDefs = `
  type User {
    id: Int
    email: String
    password: String
  }
  type ListUser {
    user: [User]
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

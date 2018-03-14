const { makeExecutableSchema } = require('graphql-tools');
const { resolvers } = require('../resolvers');

const cartDefs = require('./cart');
const userDefs = require('./user');

const SchemaDefinition = `
type Query {
  dummy: [String]
}

type Mutation {
  dummy: [String]
}

type Subscription {
  dummy: [String]
}

type Success {
  success: Boolean
}

schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}
`;

const typeDefs = [SchemaDefinition, ...cartDefs, ...userDefs];
const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;

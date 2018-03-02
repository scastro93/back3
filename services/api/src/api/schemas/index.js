const { makeExecutableSchema } = require('graphql-tools');

const userDefs = require('./user');
const cartDefs = require('./cart');
const productDefs = require('./product');

const { resolvers } = require('../resolvers');

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

const typeDefs = [SchemaDefinition, ...userDefs, ...cartDefs, ...productDefs];

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;

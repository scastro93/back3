const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const schema = require('./api/schemas/');
const PORT = 3000;

const app = express();

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress( req => ({
  schema, context: req,
  formatError: error => {

  const data = error.originalError || error;
    return {
        message: data.message,
        path: data.path,
        code: data.code
    };
  }
})));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

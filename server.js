const express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

const app = express();
// const path = require('path');

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

// app.use(express.static(path.join(__dirname, 'build')));

app.listen(process.env.PORT || 8080);
console.log('Running a GraphQL API server at http://localhost:8080/graphql');

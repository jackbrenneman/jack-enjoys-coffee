// import { JackEnjoysCoffeeSchema } from './src/graphql/schema/schema.js';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { JackEnjoysCoffeeSchema } from './src/graphql/schema/schema.js';

const app = express();
// const path = require('path');

app.use(
  '/graphql',
  graphqlHTTP({
    schema: JackEnjoysCoffeeSchema,
    graphiql: true,
  })
);

// app.use(express.static(path.join(__dirname, 'build')));

app.listen(process.env.PORT || 8080);
console.log('Running a GraphQL API server at http://localhost:8080/graphql');

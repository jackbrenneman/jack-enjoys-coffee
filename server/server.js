import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { JackEnjoysCoffeeSchema } from '../src/graphql/schema/schema.js';

const app = express();
// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

// client.connect();
// const path = require('path');

// app.use(express.static(path.join(__dirname, 'build')));

app.listen(process.env.PORT || 8080, async () => {
  console.log('Running a GraphQL API server at http://localhost:8080/graphql');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: JackEnjoysCoffeeSchema,
    graphiql: true,
  })
);

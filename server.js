/**
 * The top level server file. Runs all servers needed to run the app.
 */
import express from 'express';
import path from 'path';
import { graphqlHTTP } from 'express-graphql';
import { JackEnjoysCoffeeSchema } from './src/graphql/schema/schema.js';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';

config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 3000, async () => {
  console.log(
    `Running a GraphQL API server at http://localhost:${
      process.env.PORT || 3000
    }/graphql`
  );
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: JackEnjoysCoffeeSchema,
    graphiql: true,
  })
);

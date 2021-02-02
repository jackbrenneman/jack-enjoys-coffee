// import { JackEnjoysCoffeeSchema } from './src/graphql/schema/schema.js';
import express from 'express';
import mongoose from 'mongoose';
import { graphqlHTTP } from 'express-graphql';
import { JackEnjoysCoffeeSchema } from '../src/graphql/schema/schema.js';

const app = express();
// const path = require('path');

// app.use(express.static(path.join(__dirname, 'build')));

app.listen(process.env.PORT || 8080, async () => {
  console.log('Running a GraphQL API server at http://localhost:8080/graphql');
  await mongoose.connect(
    'mongodb+srv://jbrenneman:jbrennemanenjoyscoffee@coffeecluster.fia6m.mongodb.net/coffeeData?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB Connection Error'));
db.once('open', function () {
  console.log('connected!');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: JackEnjoysCoffeeSchema,
    graphiql: true,
  })
);

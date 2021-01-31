import { GraphQLSchema } from 'graphql';
import { JackEnjoysCoffeeQueryType } from '../types/query_type.js';
// import JackEnjoysCoffeeMutationType from '../types/mutation_type.js';

export const JackEnjoysCoffeeSchema = new GraphQLSchema({
  query: JackEnjoysCoffeeQueryType,
  // mutation: JackEnjoysCoffeeMutationType,
});

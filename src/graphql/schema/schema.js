/**
 * The schema for GraphQL.
 */
import { GraphQLSchema } from 'graphql';
import { JackEnjoysCoffeeQueryType } from '../types/query_type.js';
import JackEnjoysCoffeeMutationType from '../types/mutation_type.js';
import { EspressoType } from '../types/espresso_type.js';
import { PourOverType } from '../types/pour_over_type.js';
import { ImmersionType } from '../types/immersion_type.js';

export const JackEnjoysCoffeeSchema = new GraphQLSchema({
  query: JackEnjoysCoffeeQueryType,
  mutation: JackEnjoysCoffeeMutationType,
  // These types are not explicitly mentioned in the schema (they are implemented by an interface), so we need to add them here so they resolve correctly.
  types: [EspressoType, PourOverType, ImmersionType],
});

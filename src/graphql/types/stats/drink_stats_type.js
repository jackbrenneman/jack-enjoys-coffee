/**
 * The Drink Stats Type. Contains all details regarding a specific drink and the user's data on that drink.
 */
import { GraphQLObjectType, GraphQLInt, GraphQLFloat } from 'graphql';
import { DrinkType } from '../drink_type.js';

export const DrinkStatsType = new GraphQLObjectType({
  name: 'DrinkStatsType',
  description: 'Data regarding a drink and its specific details for a user',
  fields: {
    drink: { type: DrinkType },
    total_count: { type: GraphQLInt },
    total_coffee_in: { type: GraphQLFloat },
  },
});

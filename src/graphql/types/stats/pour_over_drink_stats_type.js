/**
 * The Pour Over Drink Stats Type. Contains all details regarding a pour over drink and the user's data on it.
 */
import { GraphQLObjectType, GraphQLInt, GraphQLFloat } from 'graphql';
import { DrinkType } from '../drink_type.js';

export const PourOverDrinkStatsType = new GraphQLObjectType({
  name: 'PourOverDrinkStatsType',
  description: 'Data regarding a pour over drink and its details for a user',
  fields: {
    drink: { type: DrinkType },
    total_count: { type: GraphQLInt },
    total_coffee_in: { type: GraphQLFloat },
    total_water_in: { type: GraphQLFloat },
  },
});

/**
 * The Espresso Drink Stats Type. Contains all details regarding an espresso drink and the user's data on it.
 */
import { GraphQLObjectType, GraphQLInt, GraphQLFloat } from 'graphql';
import { DrinkType } from '../drink_type.js';

export const EspressoDrinkStatsType = new GraphQLObjectType({
  name: 'EspressoDrinkStatsType',
  description: 'Data regarding an espresso drink and its details for a user',
  fields: {
    drink: { type: DrinkType },
    total_count: { type: GraphQLInt },
    total_coffee_in: { type: GraphQLFloat },
    total_espresso_liquid_out: { type: GraphQLFloat },
  },
});

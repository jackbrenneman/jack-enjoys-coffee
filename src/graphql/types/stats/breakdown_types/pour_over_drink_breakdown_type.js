/**
 * The Pour Over Drink Breakdown Type. Contains all details regarding a pour over drink and the user's data on it.
 */
import { GraphQLObjectType, GraphQLInt, GraphQLFloat } from 'graphql';
import { DrinkType } from '../../drink_type.js';
import { DrinkBreakdownInterface } from './drink_breakdown_interface.js';

export const PourOverDrinkBreakdownType = new GraphQLObjectType({
  name: 'PourOverDrinkBreakdownType',
  description: 'Data regarding a pour over drink and its details for a user',
  interfaces: () => [DrinkBreakdownInterface],
  fields: {
    drink: { type: DrinkType },
    total_count: { type: GraphQLInt },
    total_coffee_in: { type: GraphQLFloat },
    total_water_in: { type: GraphQLFloat },
  },
});

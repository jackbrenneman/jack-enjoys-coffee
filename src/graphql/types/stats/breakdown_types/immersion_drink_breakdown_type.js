/**
 * The Immersion Drink Breakdown Type. Contains all details regarding an immersion drink and the user's data on it.
 */
import { GraphQLObjectType, GraphQLInt, GraphQLFloat } from 'graphql';
import { DrinkType } from '../../drink_type.js';
import { DrinkBreakdownInterface } from './drink_breakdown_interface.js';

export const ImmersionDrinkBreakdownType = new GraphQLObjectType({
  name: 'ImmersionDrinkBreakdownType',
  description: 'Data regarding an immersion drink and its details for a user',
  interfaces: () => [DrinkBreakdownInterface],
  fields: {
    drink: { type: DrinkType },
    total_count: { type: GraphQLInt },
    total_coffee_in: { type: GraphQLFloat },
    total_steep_time: { type: GraphQLInt },
    total_water_in: { type: GraphQLFloat },
  },
});

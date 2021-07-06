/**
 * The Espresso Drink Breakdown Type. Contains all details regarding an espresso drink and the user's data on it.
 */
import { GraphQLObjectType, GraphQLInt, GraphQLFloat } from 'graphql';
import { DrinkType } from '../../drink_type.js';
import { DrinkBreakdownInterface } from './drink_breakdown_interface.js';

export const EspressoDrinkBreakdownType = new GraphQLObjectType({
  name: 'EspressoDrinkBreakdownType',
  description: 'Data regarding an espresso drink and its details for a user',
  interfaces: () => [DrinkBreakdownInterface],
  fields: {
    drink: { type: DrinkType },
    total_count: { type: GraphQLInt },
    total_coffee_in: { type: GraphQLFloat },
    total_liquid_out: { type: GraphQLFloat },
  },
});

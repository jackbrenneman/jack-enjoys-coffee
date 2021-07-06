/**
 * The Pour Over Breakdown Type. Contains all information regarding a user's pour over method usage and stats.
 */
import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
} from 'graphql';
import { MethodType } from '../../method_type.js';
import { MethodBreakdownInterface } from './method_breakdown_interface.js';
import { DrinkBreakdownInterface } from './drink_breakdown_interface.js';

export const PourOverBreakdownType = new GraphQLObjectType({
  name: 'PourOverBreakdownType',
  description: 'Data regarding a user and their pour over method stats',
  interfaces: () => [MethodBreakdownInterface],
  fields: {
    method: { type: MethodType },
    total_count: { type: GraphQLInt },
    total_coffee_in: { type: GraphQLFloat },
    total_water_in: { type: GraphQLFloat },
    drink_breakdown: { type: GraphQLList(DrinkBreakdownInterface) },
  },
});

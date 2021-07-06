/**
 * The Espresso Breakdown Type. Contains all information regarding a user's espresso method usage and stats.
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

export const EspressoBreakdownType = new GraphQLObjectType({
  name: 'EspressoBreakdownType',
  description: 'Data regarding a user and their espresso method stats',
  interfaces: () => [MethodBreakdownInterface],
  fields: {
    method: { type: MethodType },
    total_count: { type: GraphQLInt },
    total_coffee_in: { type: GraphQLFloat },
    total_liquid_out: { type: GraphQLFloat },
    drink_breakdown: { type: GraphQLList(DrinkBreakdownInterface) },
  },
});

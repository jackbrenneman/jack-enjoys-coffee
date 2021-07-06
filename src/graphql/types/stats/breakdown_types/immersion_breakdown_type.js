/**
 * The Immersion Breakdown Type. Contains all information regarding a user's immersion method usage and stats.
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

export const ImmersionBreakdownType = new GraphQLObjectType({
  name: 'ImmersionBreakdownType',
  description: 'Data regarding a user and their immersion method stats',
  interfaces: () => [MethodBreakdownInterface],
  fields: {
    method: { type: MethodType },
    total_count: { type: GraphQLInt },
    total_coffee_in: { type: GraphQLFloat },
    total_steep_time: { type: GraphQLInt },
    total_water_in: { type: GraphQLFloat },
    drink_breakdown: { type: GraphQLList(DrinkBreakdownInterface) },
  },
});

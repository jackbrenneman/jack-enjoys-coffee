/**
 * The Method Breakdown Type. Contains all information regarding a user's method usage and stats.
 */
import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
} from 'graphql';
import { DrinkBreakdownType } from './drink_breakdown_type.js';
import { MethodType } from '../../method_type.js';

export const MethodBreakdownType = new GraphQLObjectType({
  name: 'MethodBreakdownType',
  description: 'Data regarding a user and their methods of choice',
  fields: {
    method: { type: MethodType },
    total_count: { type: GraphQLInt },
    total_coffee_in: { type: GraphQLFloat },
    drink_breakdown: { type: GraphQLList(DrinkBreakdownType) },
  },
});

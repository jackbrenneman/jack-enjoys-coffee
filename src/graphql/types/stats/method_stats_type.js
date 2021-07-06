/**
 * The Method Stats Type. Contains all information regarding a user's method usage and stats.
 */
import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
} from 'graphql';
import { DrinkStatsType } from './drink_stats_type.js';
import { MethodType } from '../method_type.js';

export const MethodStatsType = new GraphQLObjectType({
  name: 'MethodStatsType',
  description: 'Data regarding a user and their methods of choice',
  fields: {
    method: { type: MethodType },
    total_count: { type: GraphQLInt },
    total_coffee_in: { type: GraphQLFloat },
    drink_stats: { type: GraphQLList(DrinkStatsType) },
  },
});

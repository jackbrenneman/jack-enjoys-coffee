/**
 * The Immersion Stats Type. Contains all information regarding a user's immersion method usage and stats.
 */
import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
} from 'graphql';
import { MethodType } from '../method_type.js';
import { MethodStatsInterface } from './method_stats_interface.js';
import { DrinkStatsInterface } from './drink_stats_interface.js';

export const ImmersionStatsType = new GraphQLObjectType({
  name: 'ImmersionStatsType',
  description: 'Data regarding a user and their immersion method stats',
  interfaces: () => [MethodStatsInterface],
  fields: {
    method: { type: MethodType },
    total_count: { type: GraphQLInt },
    total_coffee_in: { type: GraphQLFloat },
    total_steep_time: { type: GraphQLInt },
    total_water_in: { type: GraphQLFloat },
    drink_stats: { type: GraphQLList(DrinkStatsInterface) },
  },
});

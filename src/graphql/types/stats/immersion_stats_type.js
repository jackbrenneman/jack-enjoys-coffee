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
import { ImmersionBrewerStatsType } from './immersion_brewer_stats_type.js';
import { ImmersionDrinkStatsType } from './immersion_drink_stats_type.js';

export const ImmersionStatsType = new GraphQLObjectType({
  name: 'ImmersionStatsType',
  description: 'Data regarding a user and their immersion method stats',
  fields: {
    method: { type: MethodType },
    total_immersion_count: { type: GraphQLInt },
    total_immersion_coffee_in: { type: GraphQLFloat },
    total_immersion_steep_time: { type: GraphQLInt },
    total_immersion_water_in: { type: GraphQLFloat },
    drink_stats: { type: GraphQLList(ImmersionDrinkStatsType) },
    brewer_stats: { type: GraphQLList(ImmersionBrewerStatsType) },
  },
});

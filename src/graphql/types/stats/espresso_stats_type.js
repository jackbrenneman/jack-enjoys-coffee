/**
 * The Espresso Stats Type. Contains all information regarding a user's espresso method usage and stats.
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

export const EspressoStatsType = new GraphQLObjectType({
  name: 'EspressoStatsType',
  description: 'Data regarding a user and their espresso method stats',
  interfaces: () => [MethodStatsInterface],
  fields: {
    method: { type: MethodType },
    total_count: { type: GraphQLInt },
    total_coffee_in: { type: GraphQLFloat },
    total_liquid_out: { type: GraphQLFloat },
    drink_stats: { type: GraphQLList(DrinkStatsInterface) },
  },
});

/**
 * The Pour Over Stats Type. Contains all information regarding a user's pour over method usage and stats.
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

export const PourOverStatsType = new GraphQLObjectType({
  name: 'PourOverStatsType',
  description: 'Data regarding a user and their pour over method stats',
  interfaces: () => [MethodStatsInterface],
  fields: {
    method: { type: MethodType },
    total_count: { type: GraphQLInt },
    total_coffee_in: { type: GraphQLFloat },
    total_water_in: { type: GraphQLFloat },
    drink_stats: { type: GraphQLList(DrinkStatsInterface) },
  },
});

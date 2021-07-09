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
import { EspressoDrinkStatsType } from './espresso_drink_stats_type.js';

export const EspressoStatsType = new GraphQLObjectType({
  name: 'EspressoStatsType',
  description: 'Data regarding a user and their espresso method stats',
  fields: {
    method: { type: MethodType },
    total_espresso_count: { type: GraphQLInt },
    total_espresso_coffee_in: { type: GraphQLFloat },
    total_espresso_liquid_out: { type: GraphQLFloat },
    drink_stats: { type: GraphQLList(EspressoDrinkStatsType) },
  },
});

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
import { PourOverDrinkStatsType } from './pour_over_drink_stats_type.js';

export const PourOverStatsType = new GraphQLObjectType({
  name: 'PourOverStatsType',
  description: 'Data regarding a user and their pour over method stats',
  fields: {
    method: { type: MethodType },
    total_pour_over_count: { type: GraphQLInt },
    total_pour_over_coffee_in: { type: GraphQLFloat },
    total_pour_over_water_in: { type: GraphQLFloat },
    drink_stats: { type: GraphQLList(PourOverDrinkStatsType) },
  },
});

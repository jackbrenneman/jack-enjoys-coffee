/**
 * The The Method Stats Type. Contains all information regarding a user's method usage and stats. They can be:
 *   - EspressoStatsType
 *   - PourOverStatsType
 *   - ImmersionStatsType
 * Each of them will have the fields:
 *   - Method
 *   - Total Coffee In
 *   - Total Count
 *   - Drink Stats
 * Then, each of the different types have their own fields specific to the method used.
 */
import {
  GraphQLInterfaceType,
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
} from 'graphql';
import { MethodType } from '../method_type.js';
import { DrinkStatsInterface } from './drink_stats_interface.js';
import { EspressoStatsType } from './espresso_stats_type.js';
import { ImmersionStatsType } from './immersion_stats_type.js';
import { PourOverStatsType } from './pour_over_stats_type.js';

export const MethodStatsInterface = new GraphQLInterfaceType({
  name: 'MethodStatsInterface',
  description: 'The Stats on method in which coffee is brewed',
  fields: {
    method: { type: MethodType },
    total_count: { type: GraphQLInt },
    total_coffee_in: { type: GraphQLFloat },
    drink_stats: { type: GraphQLList(DrinkStatsInterface) },
  },
  resolveType(obj, info) {
    const { method } = obj;
    switch (method.method_id) {
      case 1:
        return EspressoStatsType;
      case 2:
        return PourOverStatsType;
      case 3:
        return ImmersionStatsType;
      default:
        return null;
    }
  },
});

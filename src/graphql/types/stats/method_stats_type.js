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
import { GraphQLObjectType } from 'graphql';
import { EspressoStatsType } from './espresso_stats_type.js';
import { ImmersionStatsType } from './immersion_stats_type.js';
import { PourOverStatsType } from './pour_over_stats_type.js';

export const MethodStatsType = new GraphQLObjectType({
  name: 'MethodStats',
  description: 'The Stats on method in which coffee is brewed',
  fields: {
    espresso_stats: {
      type: EspressoStatsType,
      resolve(parentValue) {
        return parentValue[1];
      },
    },
    pour_over_stats: {
      type: PourOverStatsType,
      resolve(parentValue) {
        return parentValue[2];
      },
    },
    immersion_stats: {
      type: ImmersionStatsType,
      resolve(parentValue) {
        return parentValue[3];
      },
    },
  },
});

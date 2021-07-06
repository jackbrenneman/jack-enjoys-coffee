/**
 * The The Drink Stats Interface. Contains all information regarding a user's drink usage and stats. They can be:
 *   - EspressoDrinkStatsType
 *   - PourOverDrinkStatsType
 *   - ImmersionDrinkStatsType
 * Each of them will have the fields:
 *   - Drink
 *   - Total Coffee In
 *   - Total Count
 * Then, each of the different types have their own fields specific to the method used.
 */
import { GraphQLInterfaceType, GraphQLFloat, GraphQLInt } from 'graphql';
import { DrinkType } from '../drink_type.js';
import { EspressoDrinkStatsType } from './espresso_drink_stats_type.js';
import { ImmersionDrinkStatsType } from './immersion_drink_stats_type.js';
import { PourOverDrinkStatsType } from './pour_over_drink_stats_type.js';

export const DrinkStatsInterface = new GraphQLInterfaceType({
  name: 'DrinkStatsInterface',
  description: 'Data regarding a drink and its specific details for a user',
  fields: {
    drink: { type: DrinkType },
    total_count: { type: GraphQLInt },
    total_coffee_in: { type: GraphQLFloat },
  },
  resolveType(obj) {
    const { drink = {} } = obj;
    const { method = {} } = drink;
    const { method_id = null } = method;
    switch (method_id) {
      case 1:
        return EspressoDrinkStatsType;
      case 2:
        return PourOverDrinkStatsType;
      case 3:
        return ImmersionDrinkStatsType;
      default:
        return null;
    }
  },
});

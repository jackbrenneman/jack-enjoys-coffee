/**
 * The schema for GraphQL.
 */
import { GraphQLSchema } from 'graphql';
import { JackEnjoysCoffeeQueryType } from '../types/query_type.js';
import JackEnjoysCoffeeMutationType from '../types/mutation_type.js';
import { EspressoType } from '../types/espresso_type.js';
import { PourOverType } from '../types/pour_over_type.js';
import { ImmersionType } from '../types/immersion_type.js';
import { EspressoStatsType } from '../types/stats/espresso_stats_type.js';
import { PourOverStatsType } from '../types/stats/pour_over_stats_type.js';
import { ImmersionStatsType } from '../types/stats/immersion_stats_type.js';
import { EspressoDrinkStatsType } from '../types/stats/espresso_drink_stats_type.js';
import { PourOverDrinkStatsType } from '../types/stats/pour_over_drink_stats_type.js';
import { ImmersionDrinkStatsType } from '../types/stats/immersion_drink_stats_type.js';

export const JackEnjoysCoffeeSchema = new GraphQLSchema({
  query: JackEnjoysCoffeeQueryType,
  mutation: JackEnjoysCoffeeMutationType,
  // These types are not explicitly mentioned in the schema (they are implemented by an interface), so we need to add them here so they resolve correctly.
  types: [
    EspressoType,
    PourOverType,
    ImmersionType,
    EspressoStatsType,
    PourOverStatsType,
    ImmersionStatsType,
    EspressoDrinkStatsType,
    PourOverDrinkStatsType,
    ImmersionDrinkStatsType,
  ],
});

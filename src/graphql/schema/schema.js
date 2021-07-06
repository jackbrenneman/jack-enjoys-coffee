/**
 * The schema for GraphQL.
 */
import { GraphQLSchema } from 'graphql';
import { JackEnjoysCoffeeQueryType } from '../types/query_type.js';
import JackEnjoysCoffeeMutationType from '../types/mutation_type.js';
import { EspressoType } from '../types/espresso_type.js';
import { PourOverType } from '../types/pour_over_type.js';
import { ImmersionType } from '../types/immersion_type.js';
import { EspressoBreakdownType } from '../types/stats/breakdown_types/espresso_breakdown_type.js';
import { PourOverBreakdownType } from '../types/stats/breakdown_types/pour_over_breakdown_type.js';
import { ImmersionBreakdownType } from '../types/stats/breakdown_types/immersion_breakdown_type.js';
import { EspressoDrinkBreakdownType } from '../types/stats/breakdown_types/espresso_drink_breakdown_type.js';
import { PourOverDrinkBreakdownType } from '../types/stats/breakdown_types/pour_over_drink_breakdown_type.js';
import { ImmersionDrinkBreakdownType } from '../types/stats/breakdown_types/immersion_drink_breakdown_type.js';

export const JackEnjoysCoffeeSchema = new GraphQLSchema({
  query: JackEnjoysCoffeeQueryType,
  mutation: JackEnjoysCoffeeMutationType,
  // These types are not explicitly mentioned in the schema (they are implemented by an interface), so we need to add them here so they resolve correctly.
  types: [
    EspressoType,
    PourOverType,
    ImmersionType,
    EspressoBreakdownType,
    PourOverBreakdownType,
    ImmersionBreakdownType,
    EspressoDrinkBreakdownType,
    PourOverDrinkBreakdownType,
    ImmersionDrinkBreakdownType,
  ],
});

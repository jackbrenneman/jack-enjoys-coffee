/**
 * The The Drink Breakdown Interface. Contains all information regarding a user's drink usage and stats. They can be:
 *   - EspressoDrinkBreakdownType
 *   - PourOverDrinkBreakdownType
 *   - ImmersionDrinkBreakdownType
 * Each of them will have the fields:
 *   - Drink
 *   - Total Coffee In
 *   - Total Count
 * Then, each of the different types have their own fields specific to the method used.
 */
import { GraphQLInterfaceType, GraphQLFloat, GraphQLInt } from 'graphql';
import { DrinkType } from '../../drink_type.js';
import { EspressoDrinkBreakdownType } from './espresso_drink_breakdown_type.js';
import { ImmersionDrinkBreakdownType } from './immersion_drink_breakdown_type.js';
import { PourOverDrinkBreakdownType } from './pour_over_drink_breakdown_type.js';

export const DrinkBreakdownInterface = new GraphQLInterfaceType({
  name: 'DrinkBreakdownInterface',
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
        return EspressoDrinkBreakdownType;
      case 2:
        return PourOverDrinkBreakdownType;
      case 3:
        return ImmersionDrinkBreakdownType;
      default:
        return null;
    }
  },
});

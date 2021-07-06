/**
 * The The Method Breakdown Type. Contains all information regarding a user's method usage and stats. They can be:
 *   - EspressoBreakdownType
 *   - PourOverBreakdownType
 *   - ImmersionBreakdownType
 * Each of them will have the fields:
 *   - Method
 *   - Total Coffee In
 *   - Total Count
 *   - Drink Breakdown
 * Then, each of the different types have their own fields specific to the method used.
 */
import {
  GraphQLInterfaceType,
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
} from 'graphql';
import { MethodType } from '../../method_type.js';
import { DrinkBreakdownInterface } from './drink_breakdown_interface.js';
import { EspressoBreakdownType } from './espresso_breakdown_type.js';
import { ImmersionBreakdownType } from './immersion_breakdown_type.js';
import { PourOverBreakdownType } from './pour_over_breakdown_type.js';

export const MethodBreakdownInterface = new GraphQLInterfaceType({
  name: 'MethodBreakdownInterface',
  description: 'The Stats on method in which coffee is brewed',
  fields: {
    method: { type: MethodType },
    total_count: { type: GraphQLInt },
    total_coffee_in: { type: GraphQLFloat },
    drink_breakdown: { type: GraphQLList(DrinkBreakdownInterface) },
  },
  resolveType(obj, info) {
    const { method } = obj;
    switch (method.method_id) {
      case 1:
        return EspressoBreakdownType;
      case 2:
        return PourOverBreakdownType;
      case 3:
        return ImmersionBreakdownType;
      default:
        return null;
    }
  },
});

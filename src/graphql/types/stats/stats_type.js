/**
 * The Stats Type. Contains all sorts of stats for a user.
 */
import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLFloat,
} from 'graphql';
import { DateType } from '../date_type.js';
import {
  totalCoffeeEntriesByUserIdResolver,
  drinkDataByMethodAndUserIdResolver,
  totalUniqueCoffeesByUserIdResolver,
  totalUniqueRoastersByUserIdResolver,
  totalCoffeeInByUserIdResolver,
  totalWaterInByUserIdResolver,
  startDateByUserIdResolver,
} from '../../resolvers/queries/user_query_type_resolvers.js';
import { MethodBreakdownInterface } from './breakdown_types/method_breakdown_interface.js';

export const StatsType = new GraphQLObjectType({
  name: 'Stats',
  fields: {
    start_date: {
      type: DateType,
      resolve(parentValue) {
        if (parentValue['user_id']) {
          const startDate = startDateByUserIdResolver(parentValue['user_id']);
          return startDate;
        }
      },
    },
    total_coffee_entries: {
      type: GraphQLInt,
      resolve(parentValue, args, context) {
        if (parentValue['user_id']) {
          return totalCoffeeEntriesByUserIdResolver(parentValue['user_id']);
        }
      },
    },
    total_unique_coffees: {
      type: GraphQLInt,
      resolve(parentValue, args, context) {
        if (parentValue['user_id']) {
          return totalUniqueCoffeesByUserIdResolver(parentValue['user_id']);
        }
      },
    },
    total_unique_roasters: {
      type: GraphQLInt,
      resolve(parentValue, args, context) {
        if (parentValue['user_id']) {
          return totalUniqueRoastersByUserIdResolver(parentValue['user_id']);
        }
      },
    },
    total_coffee_in: {
      type: GraphQLFloat,
      resolve(parentValue, args, context) {
        if (parentValue['user_id']) {
          return totalCoffeeInByUserIdResolver(parentValue['user_id']);
        }
      },
    },
    total_water_in: {
      type: GraphQLFloat,
      resolve(parentValue, args, context) {
        if (parentValue['user_id']) {
          return totalWaterInByUserIdResolver(parentValue['user_id']);
        }
      },
    },
    method_breakdown: {
      type: MethodBreakdownInterface,
      args: { method_id: { type: GraphQLNonNull(GraphQLInt) } },
      resolve(parentValue, { method_id }, context) {
        if (parentValue['user_id'] && method_id) {
          return drinkDataByMethodAndUserIdResolver(
            parentValue['user_id'],
            method_id
          );
        }
      },
    },
  },
});

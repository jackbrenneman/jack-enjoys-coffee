/**
 * The User Type. Contains all information on a user.
 */
import {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLNonNull,
} from 'graphql';
import {
  totalCoffeeEntriesByUserIdResolver,
  drinkDataByMethodAndUserIdResolver,
  totalUniqueCoffeesByUserIdResolver,
  totalUniqueRoastersByUserIdResolver,
  startDateByUserIdResolver,
} from '../resolvers/queries/user_query_type_resolvers.js';
import { MethodBreakdownType } from './breakdown_types/method_breakdown_type.js';
import { DateType } from './date_type.js';

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    user_id: {
      type: GraphQLInt,
      resolve(parentValue) {
        return parentValue['user_id'] ?? null;
      },
    },
    user_name: {
      type: GraphQLString,
      resolve(parentValue) {
        return parentValue['user_name'] ?? null;
      },
    },
    email: {
      type: GraphQLString,
      resolve(parentValue) {
        return parentValue['email'] ?? null;
      },
    },
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
    method_breakdown: {
      type: MethodBreakdownType,
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

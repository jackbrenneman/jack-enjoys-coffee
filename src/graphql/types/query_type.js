/**
 * The top level Query Type for the jack-enjoys-coffee app.
 */
import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLBoolean,
} from 'graphql';
// Resolvers
import {
  brewerByIdResolver,
  brewersByUserIdResolver,
  brewersByMethodIdResolver,
  brewersByNameResolver,
} from '../resolvers/queries/brewer_query_type_resolvers.js';
import {
  cafeByIdResolver,
  cafesByNameResolver,
  cafesByStateResolver,
  cafesByUserIdResolver,
} from '../resolvers/queries/cafe_query_type_resolvers.js';
import {
  coffeeEntriesByUserIdResolver,
  coffeeEntriesByUserIdAndDataRangeResolver,
} from '../resolvers/queries/coffee_entry_query_type_resolvers.js';
import {
  coffeeByIdResolver,
  coffeesByNameResolver,
  coffeesByRoasterIdResolver,
  coffeesByOriginIdResolver,
  coffeesByProcessIdResolver,
  coffeesByUserIdResolver,
} from '../resolvers/queries/coffee_query_type_resolvers.js';
import {
  drinkByIdResolver,
  drinksByMethodIdResolver,
  drinksByNameResolver,
  drinksByUserIdResolver,
} from '../resolvers/queries/drink_query_type_resolvers.js';
import {
  grinderByIdResolver,
  grindersByNameResolver,
  grindersByUserIdResolver,
} from '../resolvers/queries/grinder_query_type_resolvers.js';
import {
  methodByIdResolver,
  methodsResolver,
  methodsByNameResolver,
} from '../resolvers/queries/method_query_type_resolvers.js';
import {
  originByIdResolver,
  originsByUserIdResolver,
  originsResolver,
  originsByNameResolver,
} from '../resolvers/queries/origin_query_type_resolvers.js';
import {
  processByIdResolver,
  processesResolver,
  processesByNameResolver,
} from '../resolvers/queries/process_query_type_resolvers.js';
import {
  roastersByUserIdResolver,
  roasterByIdResolver,
  roastersByNameResolver,
  roastersByCityResolver,
  roastersByStateResolver,
  roastersByCountryResolver,
} from '../resolvers/queries/roaster_query_type_resolvers.js';
import { userByIdResolver } from '../resolvers/queries/user_query_type_resolvers.js';
import {
  watersByUserIdResolver,
  waterByIdResolver,
  watersByNameResolver,
} from '../resolvers/queries/water_query_type_resolvers.js';
// Types
import { BrewerType } from './brewer_type.js';
import { CafeType } from './cafe_type.js';
import { CoffeeEntryType } from './coffee_entry_type.js';
import { CoffeeType } from './coffee_type.js';
import { DrinkType } from './drink_type.js';
import { GrinderType } from './grinder_type.js';
import { MethodType } from './method_type.js';
import { OriginType } from './origin_type.js';
import { ProcessType } from './process_type.js';
import { RoasterType } from './roaster_type.js';
import { UserType } from './user_type.js';
import { WaterType } from './water_type.js';
// Validation
import { getUserId } from '../validate/validate.js';

// Used for the default end time on date ranges
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const defaultDate = `${year}-${month > 9 ? month : `0${month}`}-${
  day > 9 ? day : `0${day}`
}`;

export const JackEnjoysCoffeeQueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    brewers: {
      type: new GraphQLList(BrewerType),
      args: {
        only_active: { type: GraphQLBoolean },
        user_id: { type: GraphQLInt },
        brewer_id: { type: GraphQLInt },
        method_id: { type: GraphQLInt },
        name: { type: GraphQLString },
      },
      resolve(
        parentValue,
        { user_id, brewer_id, method_id, name, only_active },
        context
      ) {
        // Err on the side of the user_id from arguments. Then fallback on logged in user.
        const userId = user_id ? user_id : getUserId(context);
        if (userId) {
          return brewersByUserIdResolver(userId, only_active);
        }
        if (brewer_id) {
          return brewerByIdResolver(brewer_id);
        } else if (method_id) {
          return brewersByMethodIdResolver(method_id);
        } else if (name) {
          return brewersByNameResolver(name);
        }
        // If not signed in or no args inputted, return nothing.
        return [];
      },
    },
    coffeeEntries: {
      type: new GraphQLList(CoffeeEntryType),
      args: {
        user_id: { type: GraphQLInt },
        date_start: { type: GraphQLString },
        date_end: { type: GraphQLString },
      },
      resolve(parentValue, { user_id, date_start, date_end }) {
        if (user_id) {
          if (date_start) {
            return coffeeEntriesByUserIdAndDataRangeResolver(
              user_id,
              date_start,
              date_end ? date_end : defaultDate
            );
          }
          // If no date given, get all coffeeEntries
          return coffeeEntriesByUserIdResolver(user_id);
        }
        // If not signed in and no args inputted, return nothing.
        return [];
      },
    },
    cafes: {
      type: new GraphQLList(CafeType),
      args: {
        only_active: { type: GraphQLBoolean },
        user_id: { type: GraphQLInt },
        cafe_id: { type: GraphQLInt },
        name: { type: GraphQLString },
        state: { type: GraphQLString },
      },
      resolve(parentValue, { user_id, cafe_id, only_active, name, state, only_active }, context) {
        // Err on the side of the user_id from arguments. Then fallback on logged in user.
        const userId = user_id ? user_id : getUserId(context);
        if (userId) {
          return cafesByUserIdResolver(userId, only_active);
        }
        if (cafe_id) {
          return cafeByIdResolver(cafe_id);
        } else if (name) {
          // If there's a name, get those cafes similar to that name.
          return cafesByNameResolver(name);
        } else if (state) {
          // If there's a state, get the cafes from that state.
          return cafesByStateResolver(state);
        }
        // If not signed in and no args inputted, return nothing.
        return [];
      },
    },
    coffees: {
      type: new GraphQLList(CoffeeType),
      args: {
        only_active: { type: GraphQLBoolean },
        user_id: { type: GraphQLInt },
        coffee_id: { type: GraphQLInt },
        name: { type: GraphQLString },
        roaster_id: { type: GraphQLInt },
        origin_id: { type: GraphQLInt },
        process_id: { type: GraphQLInt },
      },
      resolve(
        parentValue,
        {
          user_id,
          coffee_id,
          name,
          roaster_id,
          origin_id,
          process_id,
          only_active,
        },
        context
      ) {
        // Err on the side of the user_id from arguments. Then fallback on logged in user.
        const userId = user_id ? user_id : getUserId(context);
        if (userId) {
          return coffeesByUserIdResolver(userId, only_active);
        }
        if (coffee_id) {
          return coffeeByIdResolver(coffee_id);
        } else if (name) {
          // If there's a name, get those coffees.
          return coffeesByNameResolver(name);
        } else if (roaster_id) {
          // If there's a roaster_id, get those coffees.
          return coffeesByRoasterIdResolver(roaster_id);
        } else if (origin_id) {
          // If there's a origin_id, get those coffees.
          return coffeesByOriginIdResolver(origin_id);
        } else if (process_id) {
          // If there's a process_id, get those coffees.
          return coffeesByProcessIdResolver(process_id);
        }
        // If not signed in and no args inputted, return nothing.
        return [];
      },
    },
    drinks: {
      type: new GraphQLList(DrinkType),
      args: {
        user_id: { type: GraphQLInt },
        drink_id: { type: GraphQLInt },
        name: { type: GraphQLString },
        method_id: { type: GraphQLInt },
      },
      resolve(parentValue, { user_id, drink_id, method_id, name }, context) {
        // Err on the side of the user_id from arguments. Then fallback on logged in user.
        const userId = user_id ? user_id : getUserId(context);
        if (userId) {
          return drinksByUserIdResolver(userId);
        }
        if (drink_id) {
          return drinkByIdResolver(drink_id);
        } else if (method_id) {
          return drinksByMethodIdResolver(method_id);
        } else if (name) {
          return drinksByNameResolver(name);
        }
        // If not signed in and no args inputted, return nothing.
        return [];
      },
    },
    grinders: {
      type: new GraphQLList(GrinderType),
      args: {
        only_active: { type: GraphQLBoolean },
        user_id: { type: GraphQLInt },
        grinder_id: { type: GraphQLInt },
        name: { type: GraphQLString },
      },
      resolve(
        parentValue,
        { user_id, grinder_id, name, only_active },
        context
      ) {
        // Err on the side of the user_id from arguments. Then fallback on logged in user.
        const userId = user_id ? user_id : getUserId(context);
        if (userId) {
          return grindersByUserIdResolver(userId, only_active);
        }
        if (grinder_id) {
          return grinderByIdResolver(grinder_id);
        } else if (name) {
          return grindersByNameResolver(name);
        }
        // If not signed in and no args inputted, return nothing.
        return [];
      },
    },
    methods: {
      type: new GraphQLList(MethodType),
      args: {
        method_id: { type: GraphQLInt },
        name: { type: GraphQLString },
      },
      resolve(parentValue, { method_id, name }) {
        if (method_id) {
          return methodByIdResolver(method_id);
        } else if (name) {
          return methodsByNameResolver(name);
        }
        // If no args inputted, get all methods.
        return methodsResolver();
      },
    },
    origins: {
      type: new GraphQLList(OriginType),
      args: {
        user_id: { type: GraphQLInt },
        origin_id: { type: GraphQLInt },
        name: { type: GraphQLString },
      },
      resolve(parentValue, { user_id, origin_id, name }, context) {
        // Err on the side of the user_id from arguments. Then fallback on logged in user.
        const userId = user_id ? user_id : getUserId(context);
        if (userId) {
          return originsByUserIdResolver(userId);
        }
        if (origin_id) {
          return originByIdResolver(origin_id);
        } else if (name) {
          return originsByNameResolver(name);
        }
        // If no args inputted, get all origins.
        return originsResolver();
      },
    },
    processes: {
      type: new GraphQLList(ProcessType),
      args: {
        process_id: { type: GraphQLInt },
        name: { type: GraphQLString },
      },
      resolve(parentValue, { process_id, name }) {
        if (process_id) {
          return processByIdResolver(process_id);
        } else if (name) {
          return processesByNameResolver(name);
        }
        // If no args inputted, get all processes.
        return processesResolver();
      },
    },
    roasters: {
      type: new GraphQLList(RoasterType),
      args: {
        only_active: { type: GraphQLBoolean },
        user_id: { type: GraphQLInt },
        roaster_id: { type: GraphQLInt },
        name: { type: GraphQLString },
        state: { type: GraphQLString },
      },
      resolve(
        parentValue,
        { user_id, roaster_id, name, city, state, country, only_active },
        context
      ) {
        // Err on the side of the user_id from arguments. Then fallback on logged in user.
        const userId = user_id ? user_id : getUserId(context);
        if (userId) {
          return roastersByUserIdResolver(userId, only_active);
        }
        if (roaster_id) {
          return roasterByIdResolver(roaster_id);
        } else if (name) {
          return roastersByNameResolver(name);
        } else if (city) {
          return roastersByCityResolver(city);
        } else if (state) {
          return roastersByStateResolver(state);
        } else if (country) {
          return roastersByCountryResolver(country);
        }
        // If not signed in and no args inputted, return nothing.
        return [];
      },
    },
    user: {
      type: UserType,
      args: {
        user_id: { type: GraphQLInt },
      },
      resolve(parentValue, { user_id }, context) {
        // Err on the side of the user_id from arguments. Then fallback on logged in user.
        const userId = user_id ? user_id : getUserId(context);
        if (userId) {
          return userByIdResolver(userId);
        }
        return null;
      },
    },
    waters: {
      type: new GraphQLList(WaterType),
      args: {
        only_active: { type: GraphQLBoolean },
        user_id: { type: GraphQLInt },
        water_id: { type: GraphQLInt },
        name: { type: GraphQLString },
      },
      resolve(parentValue, { user_id, water_id, name, only_active }, context) {
        // Err on the side of the user_id from arguments. Then fallback on logged in user.
        const userId = user_id ? user_id : getUserId(context);
        if (userId) {
          return watersByUserIdResolver(userId, only_active);
        }
        if (water_id) {
          return waterByIdResolver(water_id);
        } else if (name) {
          return watersByNameResolver(name);
        }
        // If not signed in and no args inputted, return nothing.
        return [];
      },
    },
  },
});

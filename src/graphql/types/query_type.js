/**
 * The top level Query Type for the jack-enjoys-coffee app.
 */
import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString,
} from 'graphql';
// Resolvers
import {
  brewerByIdResolver,
  brewersResolver,
  brewersByMethodIdResolver,
  brewersByNameResolver,
} from '../resolvers/brewers/brewer_query_type_resolvers.js';
import {
  coffeeEntriesByUserIdResolver,
  coffeeEntriesByUserIdAndDataRangeResolver,
} from '../resolvers/coffee_entries/coffee_entry_query_type_resolvers.js';
import {
  coffeeByIdResolver,
  coffeesResolver,
  coffeesByNameResolver,
  coffeesByRoasterIdResolver,
  coffeesByOriginIdResolver,
  coffeesByProcessIdResolver,
} from '../resolvers/coffees/coffee_query_type_resolvers.js';
import {
  drinkByIdResolver,
  drinksResolver,
  drinksByMethodIdResolver,
  drinksByNameResolver,
} from '../resolvers/drinks/drink_query_type_resolvers.js';
import {
  grinderByIdResolver,
  grindersResolver,
  grindersByNameResolver,
} from '../resolvers/grinders/grinder_query_type_resolvers.js';
import {
  methodByIdResolver,
  methodsResolver,
  methodsByNameResolver,
} from '../resolvers/methods/method_query_type_resolvers.js';
import {
  originByIdResolver,
  originsResolver,
  originsByNameResolver,
} from '../resolvers/origins/origin_query_type_resolvers.js';
import {
  processByIdResolver,
  processesResolver,
  processesByNameResolver,
} from '../resolvers/processes/process_query_type_resolvers.js';
import {
  roasterByIdResolver,
  roastersResolver,
  roastersByNameResolver,
  roastersByCityResolver,
  roastersByStateResolver,
  roastersByCountryResolver,
} from '../resolvers/roasters/roaster_query_type_resolvers.js';
import { userTypeResolver } from '../resolvers/users/user_query_type_resolvers.js';
import {
  waterByIdResolver,
  watersResolvers,
  watersByNameResolver,
} from '../resolvers/waters/water_query_type_resolvers.js';
// Types
import { BrewerType } from './brewer_type.js';
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
        brewer_id: { type: GraphQLInt },
        method_id: { type: GraphQLInt },
        name: { type: GraphQLString },
      },
      resolve(parentValue, { brewer_id, method_id, name }) {
        if (brewer_id) {
          return brewerByIdResolver(brewer_id);
        } else if (method_id) {
          return brewersByMethodIdResolver(method_id);
        } else if (name) {
          return brewersByNameResolver(name);
        }
        // If no args inputted, get all brewers.
        return brewersResolver();
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
        // If no args inputted, don't do anything
        return;
      },
    },
    coffees: {
      type: new GraphQLList(CoffeeType),
      args: {
        coffee_id: { type: GraphQLInt },
        name: { type: GraphQLString },
        roaster_id: { type: GraphQLInt },
        origin_id: { type: GraphQLInt },
        process_id: { type: GraphQLInt },
      },
      resolve(
        parentValue,
        { coffee_id, name, roaster_id, origin_id, process_id }
      ) {
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
        // Otherwise, return all coffees.
        return coffeesResolver();
      },
    },
    drinks: {
      type: new GraphQLList(DrinkType),
      args: {
        drink_id: { type: GraphQLID },
        name: { type: GraphQLString },
        method_id: { type: GraphQLID },
      },
      resolve(parentValue, { drink_id, method_id, name }) {
        if (drink_id) {
          return drinkByIdResolver(drink_id);
        } else if (method_id) {
          return drinksByMethodIdResolver(method_id);
        } else if (name) {
          return drinksByNameResolver(name);
        }
        // If no args inputted, get all drinks.
        return drinksResolver();
      },
    },
    grinders: {
      type: new GraphQLList(GrinderType),
      args: {
        grinder_id: { type: GraphQLID },
        name: { type: GraphQLString },
      },
      resolve(parentValue, { grinder_id, name }) {
        if (grinder_id) {
          return grinderByIdResolver(grinder_id);
        } else if (name) {
          return grindersByNameResolver(name);
        }
        // If no args inputted, get all grinders.
        return grindersResolver();
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
        origin_id: { type: GraphQLInt },
        name: { type: GraphQLString },
      },
      resolve(parentValue, { origin_id, name }) {
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
        roaster_id: { type: GraphQLInt },
        name: { type: GraphQLString },
        state: { type: GraphQLString },
      },
      resolve(parentValue, { roaster_id, name, city, state, country }) {
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
        // If no args inputted, get all roasters.
        return roastersResolver();
      },
    },
    user: {
      type: UserType,
      resolve(parentValue, args, context) {
        if (context?.user?.user_id) {
          return userTypeResolver(context?.user?.user_id);
        }
        return null;
      },
    },
    waters: {
      type: new GraphQLList(WaterType),
      args: {
        water_id: { type: GraphQLInt },
        name: { type: GraphQLString },
      },
      resolve(parentValue, { water_id, name }) {
        if (water_id) {
          return waterByIdResolver(water_id);
        } else if (name) {
          return watersByNameResolver(name);
        }
        // If no args inputted, get all waters.
        return watersResolvers();
      },
    },
  },
});

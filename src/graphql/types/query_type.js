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
import { UserType } from './user_type.js';
import { RoasterType } from './roaster_type.js';
import { OriginType } from './origin_type.js';
import { userTypeResolver } from '../resolvers/users/user_type_resolvers.js';
import {
  roasterByIdResolver,
  roastersResolver,
  roastersByNameResolver,
  roastersByStateResolver,
} from '../resolvers/roasters/roaster_query_type_resolvers.js';
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
  coffeeByIdResolver,
  coffeesResolver,
  coffeesByNameResolver,
  coffeesByRoasterIdResolver,
  coffeesByOriginIdResolver,
  coffeesByProcessIdResolver,
} from '../resolvers/coffees/coffee_query_type_resolvers.js';
import { CoffeeType } from './coffee_type.js';
import { ProcessType } from './process_type.js';

export const JackEnjoysCoffeeQueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parentValue, { id }) {
        return userTypeResolver(id);
      },
    },
    roasters: {
      type: new GraphQLList(RoasterType),
      args: {
        roaster_id: { type: GraphQLInt },
        name: { type: GraphQLString },
        state: { type: GraphQLString },
      },
      resolve(parentValue, { roaster_id, name, state }) {
        // TODO: Move this stuff out of this file and clean it up a bit.
        // If there's a roaster_id, get that roaster.
        if (roaster_id) {
          return roasterByIdResolver(roaster_id);
        } else if (name) {
          // If there's a name, get that roaster.
          return roastersByNameResolver(name);
        } else if (state) {
          // If there's a state, get all roasters for a state.
          return roastersByStateResolver(state);
        }
        // Otherwise, return all roasters.
        return roastersResolver();
      },
    },
    origins: {
      type: new GraphQLList(OriginType),
      args: {
        origin_id: { type: GraphQLInt },
        name: { type: GraphQLString },
      },
      resolve(parentValue, { origin_id, name }) {
        // TODO: Move this stuff out of this file and clean it up a bit.
        // If there's a origin_id, get that origin.
        if (origin_id) {
          return originByIdResolver(origin_id);
        } else if (name) {
          // If there's a name, get those origins.
          return originsByNameResolver(name);
        }
        // Otherwise, return all origins.
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
        // TODO: Move this stuff out of this file and clean it up a bit.
        // If there's a origin_id, get that origin.
        if (process_id) {
          return processByIdResolver(process_id);
        } else if (name) {
          // If there's a name, get those origins.
          return processesByNameResolver(name);
        }
        // Otherwise, return all origins.
        return processesResolver();
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
        // TODO: Move this stuff out of this file and clean it up a bit.
        // If there's a coffee_id, get that coffee.
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
  },
});

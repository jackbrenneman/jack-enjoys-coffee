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
import { userTypeResolver } from '../resolvers/user_type_resolver.js';
import {
  roasterByIdResolver,
  roastersResolver,
  roasterByNameResolver,
  roastersByStateResolver,
} from '../resolvers/roaster_type_resolver.js';

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
          return roasterByNameResolver(name);
        } else if (state) {
          // If there's a state, get all roasters for a state.
          return roastersByStateResolver(state);
        }
        // Otherwise, return all roasters.
        return roastersResolver();
      },
    },
  },
});

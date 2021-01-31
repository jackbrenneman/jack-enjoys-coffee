/**
 * The top level Query Type for the jack-enjoys-coffee app
 */

import { GraphQLInt, GraphQLObjectType, GraphQLList, GraphQLID } from 'graphql';
import { UserType } from './user_type.js';
import { RoasterType } from './roaster_type.js';
import { roasterData, userData } from '../../temp_db.js';

export const JackEnjoysCoffeeQueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parentValue, { id }) {
        return userData[id];
      },
    },
    roasters: {
      type: new GraphQLList(RoasterType),
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parentValue, { id }) {
        return id ? [roasterData[id]] : Object.values(roasterData);
      },
    },
  },
});

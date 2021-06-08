/**
 * The Authorization Type. Contains all information for authorization.
 */
import { GraphQLString, GraphQLObjectType } from 'graphql';
import { UserType } from './user_type.js';

export const AuthType = new GraphQLObjectType({
  name: 'Auth',
  fields: {
    user: { type: UserType },
    token: { type: GraphQLString },
  },
});

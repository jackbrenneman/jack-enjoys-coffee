/**
 * The User Type. Contains all information on a user.
 */
import { GraphQLString, GraphQLInt, GraphQLObjectType } from 'graphql';

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    user_id: { type: GraphQLInt },
    user_name: { type: GraphQLString },
    email: { type: GraphQLString },
  },
});

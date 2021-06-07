/**
 * The User Type. Contains all information on a user.
 */
import { GraphQLString, GraphQLID, GraphQLObjectType } from 'graphql';

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    user_id: { type: GraphQLID },
    user_name: { type: GraphQLString },
    email: { type: GraphQLString },
  },
});

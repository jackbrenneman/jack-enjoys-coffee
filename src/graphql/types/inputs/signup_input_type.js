/**
 * Signup input type. Used for mutations on signing users up.
 */

import { GraphQLString, GraphQLInputObjectType } from 'graphql';

export const SignupInputType = new GraphQLInputObjectType({
  name: 'SignupInput',
  description: 'Contains all the info needed to sign a user in',
  fields: {
    user_name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
});

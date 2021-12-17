/**
 * Signin input type. Used for mutations on signing users in.
 */

import { GraphQLString, GraphQLInputObjectType } from "graphql";

export const SigninInputType = new GraphQLInputObjectType({
  name: "SigninInput",
  description: "Contains all the info needed to sign a user in",
  fields: {
    user_name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
});

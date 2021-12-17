/**
 * Grinder input type. Used for mutations.
 */

import { GraphQLString, GraphQLInputObjectType, GraphQLBoolean } from "graphql";

export const GrinderInputType = new GraphQLInputObjectType({
  name: "GrinderInput",
  description: "Contains all the info needed to add grinder info in a mutation",
  fields: {
    name: { type: GraphQLString },
    website: { type: GraphQLString },
    is_active: { type: GraphQLBoolean, defaultValue: true },
  },
});

/**
 * Roaster input type. Used for mutations.
 */

import { GraphQLString, GraphQLInputObjectType, GraphQLBoolean } from "graphql";

export const RoasterInputType = new GraphQLInputObjectType({
  name: "RoasterInput",
  description: "Contains all the info needed to add roaster info in a mutation",
  fields: {
    name: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    country: { type: GraphQLString },
    website: { type: GraphQLString },
    is_active: { type: GraphQLBoolean, defaultValue: true },
  },
});

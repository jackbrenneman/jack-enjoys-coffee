/**
 * Drink input type. Used for mutations.
 */

import { GraphQLString, GraphQLInputObjectType, GraphQLInt } from "graphql";

export const DrinkInputType = new GraphQLInputObjectType({
  name: "DrinkInput",
  description: "Contains all the info needed to add drink info in a mutation",
  fields: {
    name: { type: GraphQLString },
    method_id: { type: GraphQLInt },
  },
});

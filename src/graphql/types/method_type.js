/**
 * The Methods Type. Contains all information on a method.
 */
import { GraphQLString, GraphQLObjectType, GraphQLInt } from "graphql";

export const MethodType = new GraphQLObjectType({
  name: "Method",
  description: "In what way was the coffee brewed",
  fields: {
    method_id: { type: GraphQLInt },
    name: { type: GraphQLString },
  },
});

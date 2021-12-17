/**
 * The Brewer Info Type. Contains all information on a brewer.
 */
import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLInt,
} from "graphql";
import { MethodType } from "./method_type.js";

export const BrewerType = new GraphQLObjectType({
  name: "Brewer",
  description: "Contains all the info related to a brewer",
  fields: {
    brewer_id: { type: GraphQLInt },
    name: { type: GraphQLString },
    website: { type: GraphQLString },
    is_active: { type: GraphQLBoolean },
    method: { type: MethodType },
  },
});

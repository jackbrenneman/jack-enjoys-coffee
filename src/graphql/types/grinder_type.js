/**
 * The Grinder Type. Contains all information on a grinder.
 */
import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLInt,
} from "graphql";

export const GrinderType = new GraphQLObjectType({
  name: "Grinder",
  description: "Grinder used to...grind coffee",
  fields: {
    grinder_id: { type: GraphQLInt },
    name: { type: GraphQLString },
    website: { type: GraphQLString },
    is_active: { type: GraphQLBoolean },
  },
});

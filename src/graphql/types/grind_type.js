/**
 * The Grind Type. Contains all information on a grind.
 */
import { GraphQLObjectType, GraphQLFloat } from "graphql";
import { GrinderType } from "./grinder_type.js";

export const GrindType = new GraphQLObjectType({
  name: "Grind",
  description: "Contains information on a grind",
  fields: {
    grinder: { type: GrinderType },
    setting: { type: GraphQLFloat },
  },
});

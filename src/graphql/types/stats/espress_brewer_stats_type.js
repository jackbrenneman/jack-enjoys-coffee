/**
 * The Espresso Brewer Stats Type. Contains all details regarding an espresso drink and the user's data on it.
 */
import { GraphQLObjectType, GraphQLInt, GraphQLFloat } from "graphql";
import { BrewerType } from "../brewer_type.js";

export const EspressoBrewerStatsType = new GraphQLObjectType({
  name: "EspressoBrewerStatsType",
  description: "Data regarding an espresso brewer and its details for a user",
  fields: {
    brewer: { type: BrewerType },
    total_count: { type: GraphQLInt },
    total_coffee_in: { type: GraphQLFloat },
    total_espresso_liquid_out: { type: GraphQLFloat },
  },
});

/**
 * The Immersion Drink Stats Type. Contains all details regarding an immersion drink and the user's data on it.
 */
import { GraphQLObjectType, GraphQLInt, GraphQLFloat } from "graphql";
import { DrinkType } from "../drink_type.js";

export const ImmersionDrinkStatsType = new GraphQLObjectType({
  name: "ImmersionDrinkStatsType",
  description: "Data regarding an immersion drink and its details for a user",
  fields: {
    drink: { type: DrinkType },
    total_count: { type: GraphQLInt },
    total_coffee_in: { type: GraphQLFloat },
    total_steep_time: { type: GraphQLInt },
    total_water_in: { type: GraphQLFloat },
  },
});

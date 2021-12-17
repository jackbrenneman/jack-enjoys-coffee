/**
 * Coffee Entry input type. Used for mutations.
 */

import {
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
} from "graphql";

export const CoffeeEntryInputType = new GraphQLInputObjectType({
  name: "CoffeeEntryInput",
  description:
    "Contains all the info needed to add a coffee entry in a mutation",
  fields: {
    // Date
    date: { type: GraphQLString },
    // Cafe Info
    cafe_id: { type: GraphQLInt },
    // Coffee Info
    coffee_id: { type: GraphQLInt },
    // Brew Info
    method_id: { type: GraphQLInt },
    brewer_id: { type: GraphQLInt },
    drink_id: { type: GraphQLInt },
    grinder_id: { type: GraphQLInt },
    grinder_setting: { type: GraphQLFloat },
    water_id: { type: GraphQLInt },
    coffee_in: { type: GraphQLFloat },
    liquid_out: { type: GraphQLFloat },
    water_in: { type: GraphQLInt },
    steep_time: { type: GraphQLInt },
    // Notes and Rating
    notes: { type: GraphQLString },
    rating: { type: GraphQLFloat },
  },
});

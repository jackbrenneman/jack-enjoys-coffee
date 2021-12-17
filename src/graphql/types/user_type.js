/**
 * The User Type. Contains all information on a user.
 */
import { GraphQLString, GraphQLInt, GraphQLObjectType } from "graphql";
import { StatsType } from "./stats/stats_type.js";

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    user_id: {
      type: GraphQLInt,
      resolve(parentValue) {
        return parentValue["user_id"] ?? null;
      },
    },
    user_name: {
      type: GraphQLString,
      resolve(parentValue) {
        return parentValue["user_name"] ?? null;
      },
    },
    email: {
      type: GraphQLString,
      resolve(parentValue) {
        return parentValue["email"] ?? null;
      },
    },
    stats: {
      type: StatsType,
      resolve(parentValue) {
        return parentValue ?? null;
      },
    },
  },
});

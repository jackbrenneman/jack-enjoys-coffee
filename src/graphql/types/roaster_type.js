/**
 * Roaster Type. Stores all information on a roaster.
 */
import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
} from "graphql";

export const RoasterType = new GraphQLObjectType({
  name: "Roaster",
  fields: {
    roaster_id: { type: GraphQLInt },
    name: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    country: { type: GraphQLString },
    website: { type: GraphQLString },
    is_active: { type: GraphQLBoolean },
  },
});

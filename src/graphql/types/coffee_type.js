/**
 * Coffee Type. Holds all information specific to coffee.
 */
import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { OriginType } from "./origin_type.js";
import { ProcessType } from "./process_type.js";
import { RoasterType } from "./roaster_type.js";

export const CoffeeType = new GraphQLObjectType({
  name: "Coffee",
  fields: {
    coffee_id: { type: GraphQLInt },
    name: { type: GraphQLString },
    roaster: { type: RoasterType },
    origin: { type: OriginType },
    process: { type: ProcessType },
    is_active: { type: GraphQLBoolean },
  },
});

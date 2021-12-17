/**
 * The Espresso Method Type. Contains all information on the Espresso brewing method.
 */
import {
  GraphQLObjectType,
  GraphQLFloat,
  GraphQLString,
  GraphQLInt,
} from "graphql";
import { MethodCategoryEnum } from "../enums/method_category_enum.js";
import { MethodInterface } from "../interfaces/method_interface.js";
import { BrewerType } from "./brewer_type.js";
import { DrinkType } from "./drink_type.js";

export const EspressoType = new GraphQLObjectType({
  name: "Espresso",
  description: "Contains all the info related to an espresso brew",
  interfaces: () => [MethodInterface],
  fields: {
    name: { type: GraphQLString },
    method_id: { type: GraphQLInt },
    category: { type: MethodCategoryEnum },
    brewer: { type: BrewerType },
    drink: { type: DrinkType },
    coffee_in: { type: GraphQLFloat },
    liquid_out: { type: GraphQLFloat },
  },
});

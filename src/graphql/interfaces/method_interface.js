/**
 * The method of brewing coffee. Since there are multiple methods, we have multiple types. These include:
 *   - EspressoType
 *   - PourOverType
 *   - ImmersionType
 * Each of them will have the fields:
 *   - Brewer (how that method was brewed)
 *   - Drink (the drink that was made with that method)
 *   - Coffee In (the amount of ground coffee used to make the drink)
 * Then, each of the different types have their own fields specific to the method used.
 */
import {
  GraphQLInterfaceType,
  GraphQLFloat,
  GraphQLString,
  GraphQLInt,
} from "graphql";
import { MethodCategoryEnum } from "../enums/method_category_enum.js";
import { BrewerType } from "../types/brewer_type.js";
import { DrinkType } from "../types/drink_type.js";
import { EspressoType } from "../types/espresso_type.js";
import { PourOverType } from "../types/pour_over_type.js";
import { ImmersionType } from "../types/immersion_type.js";

export const MethodInterface = new GraphQLInterfaceType({
  name: "MethodInterface",
  description: "The Method in which coffee is brewed.",
  fields: {
    name: { type: GraphQLString },
    method_id: { type: GraphQLInt },
    category: { type: MethodCategoryEnum },
    brewer: { type: BrewerType },
    drink: { type: DrinkType },
    coffee_in: { type: GraphQLFloat },
  },
  resolveType(obj, info) {
    const { category } = obj;
    switch (category) {
      case 1:
        return EspressoType;
      case 2:
        return PourOverType;
      case 3:
        return ImmersionType;
      default:
        return null;
    }
  },
});

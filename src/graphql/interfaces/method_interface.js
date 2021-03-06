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
import { GraphQLInterfaceType, GraphQLString, GraphQLFloat } from 'graphql';
import { MethodCategoryEnum } from '../enums/method_category_enum.js';
import { EspressoType } from '../types/espresso_type.js';
import { PourOverType } from '../types/pour_over_type.js';
import { ImmersionType } from '../types/immersion_type.js';

export const MethodInterface = new GraphQLInterfaceType({
  name: 'MethodInterface',
  description: 'The Method in which coffee is brewed.',
  fields: {
    category: { type: MethodCategoryEnum },
    brewer: { type: GraphQLString },
    drink: { type: GraphQLString },
    coffee_in: { type: GraphQLFloat },
  },
  resolveType(obj, info) {
    const { category } = obj;
    switch (category) {
      case 0:
        return EspressoType;
      case 1:
        return PourOverType;
      case 2:
        return ImmersionType;
      default:
        return null;
    }
  },
});

/**
 * The Pour Over Method Type. Contains all information on the Pour Over brewing method.
 */
import { GraphQLObjectType, GraphQLFloat } from 'graphql';
import { MethodCategoryEnum } from '../enums/method_category_enum.js';
import { MethodInterface } from '../interfaces/method_interface.js';
import { BrewerType } from './brewer_type.js';
import { DrinkType } from './drink_type.js';

export const PourOverType = new GraphQLObjectType({
  name: 'PourOver',
  description: 'Contains all the info related to a pour over brew',
  interfaces: () => [MethodInterface],
  fields: {
    category: { type: MethodCategoryEnum },
    brewer: { type: BrewerType },
    drink: { type: DrinkType },
    coffee_in: { type: GraphQLFloat },
    water_in: { type: GraphQLFloat },
  },
});

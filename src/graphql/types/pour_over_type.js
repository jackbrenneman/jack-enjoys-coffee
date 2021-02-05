/**
 * The Pour Over Method Type. Contains all information on the Pour Over brewing method.
 */
import { GraphQLString, GraphQLObjectType } from 'graphql';
import { MethodCategoryEnum } from '../enums/method_category_enum.js';
import { MethodInterface } from '../interfaces/method_interface.js';

export const PourOverType = new GraphQLObjectType({
  name: 'PourOver',
  description: 'Contains all the info related to a pour over brew',
  interfaces: () => [MethodInterface],
  fields: {
    category: { type: MethodCategoryEnum },
    brewer: { type: GraphQLString },
    drink: { type: GraphQLString },
  },
});

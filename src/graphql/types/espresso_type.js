/**
 * The Espresso Method Type. Contains all information on the Espresso brewing method
 */

import { GraphQLString, GraphQLObjectType } from 'graphql';
import { MethodCategoryEnum } from '../enums/method_category_enum.js';
import { MethodInterface } from '../interfaces/method_interface.js';

export const EspressoType = new GraphQLObjectType({
  name: 'Espresso',
  description: 'Contains all the info related to an espresso brew',
  interfaces: () => [MethodInterface],
  fields: {
    category: { type: MethodCategoryEnum },
    brewer: { type: GraphQLString },
    drink: { type: GraphQLString },
  },
});

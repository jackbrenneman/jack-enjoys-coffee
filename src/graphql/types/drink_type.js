/**
 * The Drink Type. Contains all information on a drink.
 */
import { GraphQLString, GraphQLObjectType, GraphQLInt } from 'graphql';
import { MethodType } from './method_type.js';

export const DrinkType = new GraphQLObjectType({
  name: 'Drink',
  description: 'Contains all the info related to a drink',
  fields: {
    drink_id: { type: GraphQLInt },
    name: { type: GraphQLString },
    method: { type: MethodType },
  },
});

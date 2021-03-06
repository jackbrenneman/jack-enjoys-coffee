/**
 * The Drink Type. Contains all information on a drink.
 */
import { GraphQLString, GraphQLObjectType, GraphQLID } from 'graphql';

export const DrinkType = new GraphQLObjectType({
  name: 'Drink',
  description: 'Contains all the info related to a drink',
  fields: {
    drink_id: { type: GraphQLID },
    name: { type: GraphQLString },
    method_id: { type: GraphQLID },
  },
});

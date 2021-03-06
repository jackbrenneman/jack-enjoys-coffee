/**
 * The Brewer Info Type. Contains all information on a brewer.
 */
import { GraphQLString, GraphQLObjectType, GraphQLID } from 'graphql';

export const BrewerType = new GraphQLObjectType({
  name: 'Brewer',
  description: 'Contains all the info related to a brewer',
  fields: {
    brewer_id: { type: GraphQLID },
    name: { type: GraphQLString },
    website: { type: GraphQLString },
    method_id: { type: GraphQLID },
  },
});

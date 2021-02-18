/**
 * Brewer input type. Used for mutations.
 */

import { GraphQLString, GraphQLInputObjectType, GraphQLInt } from 'graphql';

export const BrewerInputType = new GraphQLInputObjectType({
  name: 'BrewerInput',
  description: 'Contains all the info needed to add brewer info in a mutation',
  fields: {
    name: { type: GraphQLString },
    website: { type: GraphQLInt },
    method_id: { type: GraphQLInt },
  },
});

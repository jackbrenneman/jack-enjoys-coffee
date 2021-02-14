/**
 * Water input type. Used for mutations.
 */

import { GraphQLString, GraphQLInputObjectType } from 'graphql';

export const WaterInputType = new GraphQLInputObjectType({
  name: 'WaterInput',
  description: 'Contains all the info needed to add water info in a mutation',
  fields: {
    name: { type: GraphQLString },
    description: { type: GraphQLString },
  },
});

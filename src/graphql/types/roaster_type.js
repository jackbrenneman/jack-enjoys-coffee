/**
 * Roaster Type. Stores all information on a roaster.
 */

import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export const RoasterType = new GraphQLObjectType({
  name: 'Roaster',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    country: { type: GraphQLString },
    website: { type: GraphQLString },
  },
});

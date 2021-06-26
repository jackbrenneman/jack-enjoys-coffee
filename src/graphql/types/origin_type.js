/**
 * The Origins Type. Contains all information on an origin.
 */
import { GraphQLString, GraphQLInt, GraphQLObjectType } from 'graphql';

export const OriginType = new GraphQLObjectType({
  name: 'Origin',
  description: 'Where did the coffee come from',
  fields: {
    origin_id: { type: GraphQLInt },
    name: { type: GraphQLString },
  },
});

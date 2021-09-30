/**
 * Cafe Type. Stores all information on a cafe.
 */
 import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
} from 'graphql';

export const CafeType = new GraphQLObjectType({
  name: 'Cafe',
  fields: {
    cafe_id: { type: GraphQLInt },
    name: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    country: { type: GraphQLString },
    website: { type: GraphQLString },
    is_active: { type: GraphQLBoolean },
  },
});

/**
 * Coffee input type. Used for mutations.
 */

import {
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';

export const CoffeeInputType = new GraphQLInputObjectType({
  name: 'CoffeeInput',
  description: 'Contains all the info needed to add coffee info in a mutation',
  fields: {
    name: { type: GraphQLString },
    roaster_id: { type: GraphQLInt },
    origin_id: { type: GraphQLInt },
    process_id: { type: GraphQLInt },
    is_active: { type: GraphQLBoolean, defaultValue: true },
  },
});

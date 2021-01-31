/**
 * The Brew Info Type. Contains all information on brewing
 */

import { GraphQLString, GraphQLObjectType, GraphQLFloat } from 'graphql';
import { GrindType } from './grind_type.js';

export const BrewInfoType = new GraphQLObjectType({
  name: 'BrewInfo',
  description: 'Contains everything regarding brewing a coffee',
  fields: {
    method: { type: GraphQLString },
    brewer: { type: GraphQLString },
    drink: { type: GraphQLString },
    grind: { type: GrindType },
    water: { type: GraphQLString },
    in: { type: GraphQLFloat },
    out: { type: GraphQLFloat },
  },
});

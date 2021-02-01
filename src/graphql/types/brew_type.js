/**
 * The Brew Info Type. Contains all information on brewing
 */

import { GraphQLString, GraphQLObjectType, GraphQLFloat } from 'graphql';
import { GrindType } from './grind_type.js';
import { MethodInterface } from '../interfaces/method_interface.js';

export const BrewType = new GraphQLObjectType({
  name: 'Brew',
  description: 'Contains all the info related to the brew of the coffee entry',
  fields: {
    method: { type: MethodInterface },
    grind: { type: GrindType },
    water: { type: GraphQLString },
    in: { type: GraphQLFloat },
    out: { type: GraphQLFloat },
  },
});

/**
 * The Grind Type. Contains all information on a grind.
 */
import { GraphQLString, GraphQLObjectType } from 'graphql';
import { GrinderType } from './grinder_type.js';

export const GrindType = new GraphQLObjectType({
  name: 'Grind',
  description: 'Contains information on a grind',
  fields: {
    grinder: { type: GrinderType },
    setting: { type: GraphQLString },
  },
});

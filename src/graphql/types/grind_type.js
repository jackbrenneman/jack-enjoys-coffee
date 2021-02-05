/**
 * The Grind Type. Contains all information on a grind.
 */
import { GraphQLString, GraphQLID, GraphQLObjectType } from 'graphql';

export const GrindType = new GraphQLObjectType({
  name: 'Grind',
  description: 'Contains information on a grind',
  fields: {
    grinder: { type: GraphQLID },
    setting: { type: GraphQLString },
  },
});

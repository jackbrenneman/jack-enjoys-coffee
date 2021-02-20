/**
 * The Grinder Type. Contains all information on a grinder.
 */
import { GraphQLString, GraphQLID, GraphQLObjectType } from 'graphql';

export const GrinderType = new GraphQLObjectType({
  name: 'Grinder',
  description: 'Grinder used to...grind coffee',
  fields: {
    grinder_id: { type: GraphQLID },
    name: { type: GraphQLString },
    website: { type: GraphQLString },
  },
});

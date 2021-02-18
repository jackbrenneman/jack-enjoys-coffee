/**
 * The Process Type. Contains all information on an origin.
 */
import { GraphQLString, GraphQLID, GraphQLObjectType } from 'graphql';

export const ProcessType = new GraphQLObjectType({
  name: 'Process',
  description: 'How the coffee was processed',
  fields: {
    process_id: { type: GraphQLID },
    name: { type: GraphQLString },
  },
});

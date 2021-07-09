/**
 * The Immersion Brewer Stats Type. Contains all details regarding an espresso drink and the user's data on it.
 */
import { GraphQLObjectType, GraphQLInt, GraphQLFloat } from 'graphql';
import { BrewerType } from '../brewer_type.js';

export const ImmersionBrewerStatsType = new GraphQLObjectType({
  name: 'ImmersionBrewerStatsType',
  description: 'Data regarding an immersion brewer and its details for a user',
  fields: {
    brewer: { type: BrewerType },
    total_count: { type: GraphQLInt },
    total_coffee_in: { type: GraphQLFloat },
    total_water_in: { type: GraphQLFloat },
    total_steep_time: { type: GraphQLFloat },
  },
});

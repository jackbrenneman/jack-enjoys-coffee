/**
 * The Consumption Breakdown Type. Contains all details regarding a user's data on their consumption.
 */
import { GraphQLObjectType, GraphQLFloat } from 'graphql';

export const ConsumptionBreakdownType = new GraphQLObjectType({
  name: 'ConsumptionBreakdown',
  description: 'Data regarding coffee consumption details for a user',
  fields: {
    total_coffee_brewed: { type: GraphQLFloat },
    total_water_used: { type: GraphQLFloat },
  },
});

/**
 * The Water Type. Contains all information on a water.
 */
import {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLBoolean,
} from 'graphql';

export const WaterType = new GraphQLObjectType({
  name: 'Water',
  description: 'Water used to brew coffee',
  fields: {
    water_id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    is_active: { type: GraphQLBoolean },
  },
});

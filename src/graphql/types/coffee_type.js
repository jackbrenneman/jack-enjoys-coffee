/**
 * Coffee Type. Holds all information specific to coffee
 */

import { GraphQLObjectType, GraphQLString } from 'graphql';
import { RoasterType } from './roaster_type.js';

export const CoffeeType = new GraphQLObjectType({
  name: 'Coffee',
  fields: {
    name: { type: GraphQLString },
    roaster: { type: RoasterType },
    origin: { type: GraphQLString },
    process: { type: GraphQLString },
  },
});

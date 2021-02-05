/**
 * The Coffee Entry Type. Contains all information on a user.
 */
import {
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLFloat,
} from 'graphql';
import { CoffeeType } from './coffee_type.js';
import { BrewType } from './brew_type.js';
import { TimeType } from './time_type.js';

export const CoffeeEntryType = new GraphQLObjectType({
  name: 'CoffeeEntry',
  description: 'Contains everything needed for a single coffee entry',
  fields: {
    id: { type: GraphQLID },
    time: { type: TimeType },
    coffee: { type: CoffeeType },
    brew: { type: BrewType },
    rating: { type: GraphQLFloat },
    notes: { type: GraphQLString },
  },
});

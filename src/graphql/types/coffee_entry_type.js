/**
 * The Coffee Entry Type. Contains all information on a user.
 */
import {
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLFloat,
  GraphQLInt,
} from 'graphql';
import { CoffeeType } from './coffee_type.js';
import { BrewType } from './brew_type.js';
import { DateType } from './date_type.js';

export const CoffeeEntryType = new GraphQLObjectType({
  name: 'CoffeeEntry',
  description: 'Contains everything needed for a single coffee entry',
  fields: {
    coffee_entry_id: { type: GraphQLID },
    date: { type: DateType },
    user_id: { type: GraphQLInt },
    coffee: { type: CoffeeType },
    brew: { type: BrewType },
    rating: { type: GraphQLFloat },
    notes: { type: GraphQLString },
  },
});

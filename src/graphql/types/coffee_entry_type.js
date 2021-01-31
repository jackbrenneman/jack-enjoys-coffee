/**
 * The Coffee Entry Type. Contains all information on a user
 */

import {
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLFloat,
} from 'graphql';
import { CoffeeType } from './coffee_type.js';
import { BrewInfoType } from './brew_info_type.js';
import { DateType } from './date_type.js';

export const CoffeeEntryType = new GraphQLObjectType({
  name: 'CoffeeEntry',
  description: 'Contains everything needed for a single coffee entry',
  fields: {
    id: { type: GraphQLID },
    date: { type: DateType },
    timeOfDay: { type: GraphQLString },
    coffee: { type: CoffeeType },
    brewInfo: { type: BrewInfoType },
    rating: { type: GraphQLFloat },
    notes: { type: GraphQLString },
  },
});

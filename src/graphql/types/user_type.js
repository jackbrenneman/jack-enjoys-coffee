/**
 * The User Type. Contains all information on a user.
 */
import {
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLList,
} from 'graphql';
import { CoffeeEntryType } from './coffee_entry_type.js';

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    coffeeEntries: { type: GraphQLList(CoffeeEntryType) },
  },
});

/**
 * Coffee Entry Mutation Resolvers. Writes information for coffee entries through GraphQL.
 */
import { query } from '../../../db/index.js';
import { insertIntoCoffeeEntries } from '../../../db/queries/coffee_entries_queries.js';

/**
 * Resolver mutation for a coffee entry.
 */
export const coffeeEntriesMutationResolver = (coffeeEntry) => {
  // First, get the coffee entry into an array of the value entries for queries
  const coffeeEntryData = Object.values(coffeeEntry);
  return query(insertIntoCoffeeEntries, coffeeEntryData)
    .then((result) => {
      const data = result.rows[0];
      return data;
    })
    .catch((e) => console.error(e.stack));
};

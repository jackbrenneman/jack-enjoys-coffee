/**
 * Coffee Entry Resolvers. Fetches the information for a Coffee Entry on a GraphQL request.
 */
import { query } from '../../../db/index.js';
import { selectCoffeeEntriesByUserId } from '../../../db/queries/coffee_entries_queries.js';
import { normalizeCoffeeEntries } from '../../../db/normalizers/coffee_entries_normalizers.js';

/**
 * Resolver for Coffee Entries.
 */
export const coffeeEntriesByUserIdResolver = (user_id) => {
  return query(selectCoffeeEntriesByUserId, [user_id])
    .then((result) => {
      const data = result.rows;
      return normalizeCoffeeEntries(data);
    })
    .catch((e) => console.error(e.stack));
};

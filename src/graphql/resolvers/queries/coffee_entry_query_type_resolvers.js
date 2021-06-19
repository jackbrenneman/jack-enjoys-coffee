/**
 * Coffee Entry Resolvers. Fetches the information for a Coffee Entry on a GraphQL request.
 */
import { query } from '../../../db/index.js';
import {
  selectCoffeeEntriesByUserId,
  selectCoffeeEntriesByUserIdAndDateRange,
} from '../../../db/queries/coffee_entries_queries.js';
import { normalizeCoffeeEntries } from '../../../db/normalizers/coffee_entries_normalizers.js';

/**
 * Resolver for Coffee Entries by user_id
 */
export const coffeeEntriesByUserIdResolver = (user_id) => {
  return query(selectCoffeeEntriesByUserId, [user_id])
    .then((result) => {
      const data = result.rows;
      return normalizeCoffeeEntries(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for Coffee Entries by user_id and date range
 */
export const coffeeEntriesByUserIdAndDataRangeResolver = (
  user_id,
  date_start,
  date_end
) => {
  return query(selectCoffeeEntriesByUserIdAndDateRange, [
    user_id,
    date_start,
    date_end,
  ])
    .then((result) => {
      const data = result.rows;
      return normalizeCoffeeEntries(data);
    })
    .catch((e) => console.error(e.stack));
};

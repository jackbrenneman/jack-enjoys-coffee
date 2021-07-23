/**
 * Coffee Entry Mutation Resolvers. Writes information for coffee entries through GraphQL.
 */
import { query } from '../../../db/index.js';
import {
  deleteCoffeeEntry,
  insertIntoCoffeeEntries,
  updateCoffeeEntry,
} from '../../../db/queries/coffee_entries_queries.js';

/**
 * Resolver mutation for a coffee entry.
 */
export const createCoffeeEntryMutationResolver = (coffeeEntry, user_id) => {
  // Add user_id, then get the coffee entry into an array of the value entries for queries
  const coffeeEntryData = Object.values({ user_id, ...coffeeEntry });
  return query(insertIntoCoffeeEntries, coffeeEntryData)
    .then((result) => {
      const data = result.rows[0];
      return data;
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver mutation for deleting a coffee entry.
 *
 * @param {int} coffee_entry_id
 * @param {int} user_id
 * @returns {boolean} True if the coffee entry was deleted
 */
export const deleteCoffeeEntryMutationResolver = (coffee_entry_id, user_id) => {
  return query(deleteCoffeeEntry, [coffee_entry_id, user_id])
    .then((result) => {
      // If the result is 1, then the coffee entry was deleted
      return result;
    })
    .catch((e) => {
      console.error(e);
      return false;
    });
};

/**
 * Resolver mutation for updating a coffee entry.
 *
 * @param {object} coffee_entry
 * @param {int} coffee_entry_id
 * @param {int} user_id
 * @returns {object} The updated coffee entry object
 */
export const updateCoffeeEntryMutationResolver = (
  coffee_entry,
  coffee_entry_id,
  user_id
) => {
  // Add user_id, then get the coffee entry into an array of the value entries for queries
  const coffeeEntryData = Object.values({
    ...coffee_entry,
    coffee_entry_id,
    user_id,
  });
  return query(updateCoffeeEntry, coffeeEntryData)
    .then((result) => {
      const data = result.rows[0];
      return data;
    })
    .catch((e) => console.error(e.stack));
};

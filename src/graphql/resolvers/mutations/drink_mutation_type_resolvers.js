/**
 * Drinks Mutation Resolvers. Writes information for drinks through GraphQL.
 */
import { query } from '../../../db/index.js';
import {
  insertIntoDrinks,
  updateDrink,
  deleteDrink,
} from '../../../db/queries/drinks_queries.js';

/**
 * Resolver mutation for all drinks.
 */
export const createDrinkMutationResolver = (drink, user_id) => {
  // First, get the drinks into an array of the value entries for queries
  const drinkData = Object.values({ ...drink, user_id });
  return query(insertIntoDrinks, drinkData)
    .then((result) => {
      const data = result.rows[0];
      return data;
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver mutation for deleting a drink.
 *
 * @param {int} drink_id
 * @param {int} user_id
 * @returns {boolean} True if the drink was deleted
 */
export const deleteDrinkMutationResolver = (drink_id, user_id) => {
  return query(deleteDrink, [drink_id, user_id])
    .then((result) => {
      // If the result is 1, then the brewer was deleted
      return result;
    })
    .catch((e) => {
      console.error(e);
      return false;
    });
};

/**
 * Resolver mutation for updating a brewer.
 *
 * @param {object} drink
 * @param {int} drink_id
 * @param {int} user_id
 * @returns {object} The updated brewer object
 */
export const updateDrinkMutationResolver = (drink, drink_id, user_id) => {
  // First, get the brewers into an array of the value entries for queries
  const brewerData = Object.values({ ...drink, drink_id, user_id });
  return query(updateDrink, brewerData)
    .then((result) => {
      const data = result.rows[0];
      return data;
    })
    .catch((e) => console.error(e.stack));
};

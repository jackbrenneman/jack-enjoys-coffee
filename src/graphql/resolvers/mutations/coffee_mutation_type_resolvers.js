/**
 * Roaster Mutation Resolvers. Fetches the information for roasters on a GraphQL request.
 */
import { query } from "../../../db/index.js";
import {
  deleteCoffee,
  insertIntoCoffees,
  updateCoffee,
} from "../../../db/queries/coffees_queries.js";
import {
  normalizeCreateCoffeeMutation,
  normalizeUpdateCoffeeMutation,
} from "../../../db/normalizers/coffees_normalizers.js";

/**
 * Resolver mutation for all coffees.
 *
 * @param {object} coffee
 * @param {int} user_id
 * @returns {object} The new coffee object
 */
export const createCoffeeMutationResolver = (coffee, user_id) => {
  // First, get the coffees into an array of the value entries for queries
  const coffeeData = Object.values({ ...coffee, user_id });
  return query(insertIntoCoffees, coffeeData)
    .then((result) => {
      const data = result.rows[0];
      // normalizeCoffees returns an array. Since we're only adding one at at time, we can safely return the first
      return normalizeCreateCoffeeMutation(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver mutation for deleting a coffee.
 *
 * @param {int} coffee_id
 * @param {int} user_id
 * @returns {boolean} True if the coffee was deleted
 */
export const deleteCoffeeMutationResolver = (coffee_id, user_id) => {
  return query(deleteCoffee, [coffee_id, user_id])
    .then((result) => {
      // If the result is 1, then the coffee was deleted
      return result;
    })
    .catch((e) => {
      console.error(e);
      return false;
    });
};

/**
 * Resolver mutation for updating a coffee.
 *
 * @param {object} coffee
 * @param {int} coffee_id
 * @param {int} user_id
 * @returns {object} The updated coffee object
 */
export const updateCoffeeMutationResolver = (coffee, coffee_id, user_id) => {
  // First, get the coffee into an array of the value entries for queries
  const coffeeData = Object.values({ ...coffee, coffee_id, user_id });
  return query(updateCoffee, coffeeData)
    .then((result) => {
      const data = result.rows[0];
      // normalizeCoffees returns an array. Since we're only adding one at at time, we can safely return the first
      return normalizeUpdateCoffeeMutation(data);
    })
    .catch((e) => console.error(e.stack));
};

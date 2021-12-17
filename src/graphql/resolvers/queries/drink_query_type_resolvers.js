/**
 * Drink Type Resolvers. Fetches the information for drinks on a GraphQL request.
 */
import { query } from "../../../db/index.js";
import {
  selectAllDrinks,
  selectDrinksByUserId,
  selectDrinkById,
  selectDrinksByName,
  selectDrinksByMethodId,
} from "../../../db/queries/drinks_queries.js";
import {
  normalizeDrinks,
  normalizeDrinksByUserId,
  normalizeDrinkById,
  normalizeDrinksByName,
  normalizeDrinksByMethodId,
} from "../../../db/normalizers/drinks_normalizers.js";

/**
 * Resolver for all drinks.
 */
export const drinksResolver = () => {
  return query(selectAllDrinks)
    .then((result) => {
      const data = result.rows;
      return normalizeDrinks(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for drinks by user_id.
 *
 * @param {int} user_id the user_id of the user
 */
export const drinksByUserIdResolver = (user_id) => {
  return query(selectDrinksByUserId, [user_id])
    .then((result) => {
      const data = result.rows;
      return normalizeDrinksByUserId(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for drink by id.
 *
 * @param {int} drink_id the drink_id of the drink
 */
export const drinkByIdResolver = (brewer_id) => {
  return query(selectDrinkById, [brewer_id])
    .then((result) => {
      const data = result.rows;
      return normalizeDrinkById(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for drink by name. Retrieves all drinks that have the inputted string <name> within their full name.
 *
 * @param {string} name the name of the drink
 */
export const drinksByNameResolver = (name) => {
  return query(selectDrinksByName, [`%${name}%`])
    .then((result) => {
      const data = result.rows;
      return normalizeDrinksByName(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for drink by method_id. Retrieves all drinks that have the inputted method_id.
 *
 * @param {string} method_id the method_id of the drink
 */
export const drinksByMethodIdResolver = (method_id) => {
  return query(selectDrinksByMethodId, [method_id])
    .then((result) => {
      const data = result.rows;
      return normalizeDrinksByMethodId(data);
    })
    .catch((e) => console.error(e.stack));
};

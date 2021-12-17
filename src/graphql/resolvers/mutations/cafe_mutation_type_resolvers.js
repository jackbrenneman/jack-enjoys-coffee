/**
 * Cafe Mutation Resolvers. Fetches the information for cafes on a GraphQL request.
 */
import { query } from "../../../db/index.js";
import {
  deleteCafe,
  insertIntoCafes,
  updateCafe,
} from "../../../db/queries/cafes_queries.js";

/**
 * Resolver mutation for creating a cafe.
 *
 * @param {object} cafe
 * @param {int} user_id
 * @returns {object} The new cafe object
 */
export const createCafeMutationResolver = (cafe, user_id) => {
  // First, get the cafe into an array of the value entries for queries
  const cafeData = Object.values({ ...cafe, user_id });
  return query(insertIntoCafes, cafeData)
    .then((result) => {
      const data = result.rows[0];
      return data;
    })
    .catch((e) => console.error(e));
};

/**
 * Resolver mutation for deleting a cafe.
 *
 * @param {int} cafe_id
 * @param {int} user_id
 * @returns {boolean} True if the cafe was deleted
 */
export const deleteCafeMutationResolver = (cafe_id, user_id) => {
  return query(deleteCafe, [cafe_id, user_id])
    .then((result) => {
      // If the result is 1, then the cafe was deleted
      return result;
    })
    .catch((e) => {
      console.error(e);
      return false;
    });
};

/**
 * Resolver mutation for updating a cafe.
 *
 * @param {object} cafe
 * @param {int} cafe_id
 * @param {int} user_id
 * @returns {object} The updated cafe object
 */
export const updateCafeMutationResolver = (cafe, cafe_id, user_id) => {
  // First, get the cafes into an array of the value entries for queries
  const cafeData = Object.values({ ...cafe, cafe_id, user_id });
  return query(updateCafe, cafeData)
    .then((result) => {
      const data = result.rows[0];
      return data;
    })
    .catch((e) => console.error(e));
};

/**
 * Brewers Mutation Resolvers. Writes information for brewers through GraphQL.
 */
import { query } from "../../../db/index.js";
import {
  deleteBrewer,
  insertIntoBrewers,
  updateBrewer,
} from "../../../db/queries/brewers_queries.js";

/**
 * Resolver mutation for all brewers.
 *
 * @param {object} brewer
 * @param {int} user_id
 * @returns {object} The new brewer object
 */
export const createBrewerMutationResolver = (brewer, user_id) => {
  // First, get the brewers into an array of the value entries for queries
  const brewerData = Object.values({ ...brewer, user_id });
  return query(insertIntoBrewers, brewerData)
    .then((result) => {
      const data = result.rows[0];
      return data;
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver mutation for deleting a brewer.
 *
 * @param {int} brewer_id
 * @param {int} user_id
 * @returns {boolean} True if the brewer was deleted
 */
export const deleteBrewerMutationResolver = (brewer_id, user_id) => {
  return query(deleteBrewer, [brewer_id, user_id])
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
 * @param {object} brewer
 * @param {int} brewer_id
 * @param {int} user_id
 * @returns {object} The updated brewer object
 */
export const updateBrewerMutationResolver = (brewer, brewer_id, user_id) => {
  // First, get the brewers into an array of the value entries for queries
  const brewerData = Object.values({ ...brewer, brewer_id, user_id });
  return query(updateBrewer, brewerData)
    .then((result) => {
      const data = result.rows[0];
      return data;
    })
    .catch((e) => console.error(e.stack));
};

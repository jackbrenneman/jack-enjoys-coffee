/**
 * Grinders Mutation Resolvers. Writes information for grinders through GraphQL.
 */
import { query } from '../../../db/index.js';
import {
  deleteGrinder,
  insertIntoGrinders,
  updateGrinder,
} from '../../../db/queries/grinders_queries.js';

/**
 * Resolver mutation for all grinders.
 *
 * @param {object} grinder
 * @param {int} user_id
 * @returns {object} The new grinder object
 */
export const createGrinderMutationResolver = (grinder, user_id) => {
  // First, get the grinders into an array of the value entries for queries
  const grinderData = Object.values({ ...grinder, user_id });
  return query(insertIntoGrinders, grinderData)
    .then((result) => {
      const data = result.rows[0];
      return data;
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver mutation for deleting a grinder.
 *
 * @param {int} grinder_id
 * @param {int} user_id
 * @returns {boolean} True if the grinder was deleted
 */
export const deleteGrinderMutationResolver = (grinder_id, user_id) => {
  return query(deleteGrinder, [grinder_id, user_id])
    .then((result) => {
      // If the result is 1, then the grinder was deleted
      return result;
    })
    .catch((e) => {
      console.error(e);
      return false;
    });
};

/**
 * Resolver mutation for updating a grinder.
 *
 * @param {object} grinder
 * @param {int} grinder_id
 * @param {int} user_id
 * @returns {object} The updated grinder object
 */
export const updateGrinderMutationResolver = (grinder, grinder_id, user_id) => {
  // First, get the grinders into an array of the value entries for queries
  const grinderData = Object.values({ ...grinder, grinder_id, user_id });
  return query(updateGrinder, grinderData)
    .then((result) => {
      const data = result.rows[0];
      return data;
    })
    .catch((e) => console.error(e.stack));
};

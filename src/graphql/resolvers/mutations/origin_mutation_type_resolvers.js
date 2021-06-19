/**
 * Origins Mutation Resolvers. Fetches the information for origins on a GraphQL request.
 */
import { query } from '../../../db/index.js';
import {
  insertIntoOrigins,
  deleteOrigin,
  updateOrigin,
} from '../../../db/queries/origins_queries.js';

/**
 * Resolver mutation for all origins.
 */
export const createOriginMutationResolver = (origin, user_id) => {
  return query(insertIntoOrigins, [origin, user_id])
    .then((result) => {
      const data = result.rows[0];
      return data;
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver mutation for deleting an origin.
 *
 * @param {int} origin_id
 * @param {int} user_id
 * @returns {boolean} True if the origin was deleted
 */
export const deleteOriginMutationResolver = (origin_id, user_id) => {
  return query(deleteOrigin, [origin_id, user_id])
    .then((result) => {
      // If the result is 1, then the origin was deleted
      return result;
    })
    .catch((e) => {
      console.error(e);
      return false;
    });
};

/**
 * Resolver mutation for updating an origin.
 *
 * @param {string} name
 * @param {int} origin_id
 * @param {int} user_id
 * @returns {object} The updated origin object
 */
export const updateOriginMutationResolver = (name, origin_id, user_id) => {
  return query(updateOrigin, [name, origin_id, user_id])
    .then((result) => {
      const data = result.rows[0];
      return data;
    })
    .catch((e) => console.error(e.stack));
};

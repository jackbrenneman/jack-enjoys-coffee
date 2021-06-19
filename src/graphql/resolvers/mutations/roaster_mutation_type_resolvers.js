/**
 * Roaster Mutation Resolvers. Fetches the information for roasters on a GraphQL request.
 */
import { query } from '../../../db/index.js';
import {
  deleteRoaster,
  insertIntoRoasters,
  updateRoaster,
} from '../../../db/queries/roasters_queries.js';

/**
 * Resolver mutation for all roasters.
 *
 * @param {object} roaster
 * @param {int} user_id
 * @returns {object} The new roaster object
 */
export const createRoasterMutationResolver = (roaster, user_id) => {
  // First, get the roasters into an array of the value entries for queries
  const roasterData = Object.values({ ...roaster, user_id });
  return query(insertIntoRoasters, roasterData)
    .then((result) => {
      const data = result.rows[0];
      return data;
    })
    .catch((e) => console.error(e));
};

/**
 * Resolver mutation for deleting a roaster.
 *
 * @param {int} roaster_id
 * @param {int} user_id
 * @returns {boolean} True if the roaster was deleted
 */
export const deleteRoasterMutationResolver = (roaster_id, user_id) => {
  return query(deleteRoaster, [roaster_id, user_id])
    .then((result) => {
      // If the result is 1, then the roaster was deleted
      return result;
    })
    .catch((e) => {
      console.error(e);
      return false;
    });
};

/**
 * Resolver mutation for updating a roaster.
 *
 * @param {object} roaster
 * @param {int} roaster_id
 * @param {int} user_id
 * @returns {object} The updated roaster object
 */
export const updateRoasterMutationResolver = (roaster, roaster_id, user_id) => {
  // First, get the roasters into an array of the value entries for queries
  const roasterData = Object.values({ ...roaster, roaster_id, user_id });
  return query(updateRoaster, roasterData)
    .then((result) => {
      const data = result.rows[0];
      return data;
    })
    .catch((e) => console.error(e));
};

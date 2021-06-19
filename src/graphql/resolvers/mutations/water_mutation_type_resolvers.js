/**
 * Waters Mutation Resolvers. Fetches the information for waters on a GraphQL request.
 */
import { query } from '../../../db/index.js';
import {
  insertIntoWaters,
  deleteWater,
  updateWater,
} from '../../../db/queries/waters_queries.js';

/**
 * Resolver mutation for all waters.
 *
 * @param {object} water
 * @param {int} user_id
 * @returns {object} The new water object
 */
export const createWaterMutationResolver = (water, user_id) => {
  // First, get the waters into an array of the value entries for queries
  const waterData = Object.values({ ...water, user_id });
  return query(insertIntoWaters, waterData)
    .then((result) => {
      const data = result.rows[0];
      return data;
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver mutation for deleting a water.
 *
 * @param {int} water_id
 * @param {int} user_id
 * @returns {boolean} True if the water was deleted
 */
export const deleteWaterMutationResolver = (water_id, user_id) => {
  return query(deleteWater, [water_id, user_id])
    .then((result) => {
      // If the result is 1, then the water was deleted
      return result;
    })
    .catch((e) => {
      console.error(e);
      return false;
    });
};

/**
 * Resolver mutation for updating a water.
 *
 * @param {object} water
 * @param {int} water_id
 * @param {int} user_id
 * @returns {object} The updated water object
 */
export const updateWaterMutationResolver = (water, water_id, user_id) => {
  // First, get the waters into an array of the value entries for queries
  const waterData = Object.values({ ...water, water_id, user_id });
  return query(updateWater, waterData)
    .then((result) => {
      const data = result.rows[0];
      return data;
    })
    .catch((e) => console.error(e.stack));
};

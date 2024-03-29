/**
 * Waters Type Resolvers. Fetches the information for waters on a GraphQL request.
 */
import { query } from "../../../db/index.js";
import {
  selectAllWaters,
  selectWatersByUserId,
  selectActiveWatersByUserId,
  selectWaterById,
  selectWatersByName,
} from "../../../db/queries/waters_queries.js";
import {
  normalizeWaters,
  normalizeWatersByUserId,
  normalizeWaterById,
  normalizeWatersByName,
} from "../../../db/normalizers/waters_normalizers.js";

/**
 * Resolver for all waters.
 */
export const watersResolver = () => {
  return query(selectAllWaters)
    .then((result) => {
      const data = result.rows;
      return normalizeWaters(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for roaster by user_id.
 *
 * @param {int} user_id the user_id of the user
 * @param {boolean} only_active whether or not to grab ones that are labled as "is_active"
 */
export const watersByUserIdResolver = (user_id, only_active) => {
  return query(
    only_active ? selectActiveWatersByUserId : selectWatersByUserId,
    [user_id]
  )
    .then((result) => {
      const data = result.rows;
      return normalizeWatersByUserId(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for water by id.
 *
 * @param {int} water_id the id of the water
 */
export const waterByIdResolver = (water_id) => {
  return query(selectWaterById, [water_id])
    .then((result) => {
      const data = result.rows;
      return normalizeWaterById(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for water by name. Retrieves all waters that have the inputted string <name> within their full name.
 *
 * @param {string} name the name of the water
 */
export const watersByNameResolver = (name) => {
  return query(selectWatersByName, [`%${name}%`])
    .then((result) => {
      const data = result.rows;
      return normalizeWatersByName(data);
    })
    .catch((e) => console.error(e.stack));
};

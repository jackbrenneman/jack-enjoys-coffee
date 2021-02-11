/**
 * Roaster Type Resolvers. Fetches the information for roasters on a GraphQL request.
 */
import { query } from '../../db/index.js';
import {
  selectAllRoasters,
  selectRoasterById,
  selectRoasterByName,
  selectRoasterByState,
} from '../../db/queries/roasters_queries.js';
import {
  normalizeRoasters,
  normalizeRoasterById,
  normalizeRoasterByName,
  normalizeRoastersByState,
} from '../../db/normalizers/roasters_normalizers.js';

/**
 * Resolver for all roasters.
 */
export const roastersResolver = () => {
  return query(selectAllRoasters)
    .then((result) => {
      const data = result.rows;
      return normalizeRoasters(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for roaster by id.
 *
 * @param {int} roaster_id the roaster_id of the roaster
 */
export const roasterByIdResolver = (roaster_id) => {
  return query(selectRoasterById, [roaster_id])
    .then((result) => {
      const data = result.rows;
      return normalizeRoasterById(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for roaster by name. Retrieves all roasters that have the inputted string <name> within their full name.
 *
 * @param {string} name the name of the roaster
 */
export const roasterByNameResolver = (name) => {
  return query(selectRoasterByName, [`%${name}%`])
    .then((result) => {
      const data = result.rows;
      return normalizeRoasterByName(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for roasters by state.
 *
 * @param {string} state the name of the roaster
 */
export const roastersByStateResolver = (state) => {
  return query(selectRoasterByState, [state])
    .then((result) => {
      const data = result.rows;
      return normalizeRoastersByState(data);
    })
    .catch((e) => console.error(e.stack));
};

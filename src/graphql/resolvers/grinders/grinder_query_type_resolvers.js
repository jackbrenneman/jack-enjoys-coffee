/**
 * Grinder Type Resolvers. Fetches the information for grinders on a GraphQL request.
 */
import { query } from '../../../db/index.js';
import {
  selectAllGrinders,
  selectGrinderById,
  selectGrindersByName,
} from '../../../db/queries/grinders_queries.js';
import {
  normalizeGrinders,
  normalizeGrinderById,
  normalizeGrindersByName,
} from '../../../db/normalizers/grinders_normalizers.js';

/**
 * Resolver for all grinders.
 */
export const grindersResolver = () => {
  return query(selectAllGrinders)
    .then((result) => {
      const data = result.rows;
      return normalizeGrinders(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for grinder by id.
 *
 * @param {int} grinder_id the grinder_id of the grinder
 */
export const grinderByIdResolver = (grinder_id) => {
  return query(selectGrinderById, [grinder_id])
    .then((result) => {
      const data = result.rows;
      return normalizeGrinderById(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for grinder by name. Retrieves all grinders that have the inputted string <name> within their full name.
 *
 * @param {string} name the name of the grinder
 */
export const grindersByNameResolver = (name) => {
  return query(selectGrindersByName, [`%${name}%`])
    .then((result) => {
      const data = result.rows;
      return normalizeGrindersByName(data);
    })
    .catch((e) => console.error(e.stack));
};

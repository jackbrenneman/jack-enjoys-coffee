/**
 * Origins Type Resolvers. Fetches the information for origins on a GraphQL request.
 */
import { query } from '../../../db/index.js';
import {
  selectAllOrigins,
  selectOriginById,
  selectOriginsByName,
} from '../../../db/queries/origins_queries.js';
import {
  normalizeOrigins,
  normalizeOriginById,
  normalizeOriginsByName,
} from '../../../db/normalizers/origins_normalizers.js';

/**
 * Resolver for all origins.
 */
export const originsResolver = () => {
  return query(selectAllOrigins)
    .then((result) => {
      const data = result.rows;
      return normalizeOrigins(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for origin by id.
 *
 * @param {int} roaster_id the origin-id of the origin
 */
export const originByIdResolver = (roaster_id) => {
  return query(selectOriginById, [roaster_id])
    .then((result) => {
      const data = result.rows;
      return normalizeOriginById(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for origin by name. Retrieves all origins that have the inputted string <name> within their full name.
 *
 * @param {string} name the name of the origin
 */
export const originsByNameResolver = (name) => {
  return query(selectOriginsByName, [`%${name}%`])
    .then((result) => {
      const data = result.rows;
      return normalizeOriginsByName(data);
    })
    .catch((e) => console.error(e.stack));
};

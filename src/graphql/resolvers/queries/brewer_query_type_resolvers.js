/**
 * Brewer Type Resolvers. Fetches the information for brewers on a GraphQL request.
 */
import { query } from '../../../db/index.js';
import {
  selectAllBrewers,
  selectBrewersByUserId,
  selectActiveBrewersByUserId,
  selectBrewerById,
  selectBrewersByName,
  selectBrewersByMethodId,
} from '../../../db/queries/brewers_queries.js';
import {
  normalizeBrewers,
  normalizeBrewersByUserId,
  normalizeBrewerById,
  normalizeBrewersByName,
  normalizeBrewersByMethodId,
} from '../../../db/normalizers/brewers_normalizers.js';

/**
 * Resolver for all brewers.
 */
export const brewersResolver = () => {
  return query(selectAllBrewers)
    .then((result) => {
      const data = result.rows;
      return normalizeBrewers(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for brewers by user_id.
 *
 * @param {int} user_id the user_id of the user
 * @param {boolean} only_active whether or not to grab ones that are labled as "is_active"
 */
export const brewersByUserIdResolver = (user_id, only_active = false) => {
  return query(
    only_active ? selectActiveBrewersByUserId : selectBrewersByUserId,
    [user_id]
  )
    .then((result) => {
      const data = result.rows;
      return normalizeBrewersByUserId(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for brewer by id.
 *
 * @param {int} brewer_id the brewer_id of the brewer
 */
export const brewerByIdResolver = (brewer_id) => {
  return query(selectBrewerById, [brewer_id])
    .then((result) => {
      const data = result.rows;
      return normalizeBrewerById(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for brewer by name. Retrieves all brewers that have the inputted string <name> within their full name.
 *
 * @param {string} name the name of the brewer
 */
export const brewersByNameResolver = (name) => {
  return query(selectBrewersByName, [`%${name}%`])
    .then((result) => {
      const data = result.rows;
      return normalizeBrewersByName(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for brewer by method_id. Retrieves all brewers that have the inputted method_id.
 *
 * @param {string} method_id the method_id of the brewer
 */
export const brewersByMethodIdResolver = (method_id) => {
  return query(selectBrewersByMethodId, [method_id])
    .then((result) => {
      const data = result.rows;
      return normalizeBrewersByMethodId(data);
    })
    .catch((e) => console.error(e.stack));
};

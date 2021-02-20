/**
 * Methods Type Resolvers. Fetches the information for methods on a GraphQL request.
 */
import { query } from '../../../db/index.js';
import {
  selectAllMethods,
  selectMethodById,
  selectMethodsByName,
} from '../../../db/queries/methods_queries.js';
import {
  normalizeMethods,
  normalizeMethodById,
  normalizeMethodsByName,
} from '../../../db/normalizers/methods_normalizers.js';

/**
 * Resolver for all methods.
 */
export const methodsResolver = () => {
  return query(selectAllMethods)
    .then((result) => {
      const data = result.rows;
      return normalizeMethods(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for method by id.
 *
 * @param {int} method_id the method_id of the method
 */
export const methodByIdResolver = (method_id) => {
  return query(selectMethodById, [method_id])
    .then((result) => {
      const data = result.rows;
      return normalizeMethodById(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for method by name. Retrieves all methods that have the inputted string <name> within their full name.
 *
 * @param {string} name the name of the method
 */
export const methodsByNameResolver = (name) => {
  return query(selectMethodsByName, [`%${name}%`])
    .then((result) => {
      const data = result.rows;
      return normalizeMethodsByName(data);
    })
    .catch((e) => console.error(e.stack));
};

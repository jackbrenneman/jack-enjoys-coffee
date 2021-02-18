/**
 * Process Type Resolvers. Fetches the information for processes on a GraphQL request.
 */
import { query } from '../../../db/index.js';
import {
  selectAllProcesses,
  selectProcessById,
  selectProcessesByName,
} from '../../../db/queries/processes_queries.js';
import {
  normalizeProcesses,
  normalizeProcessById,
  normalizeProcessesByName,
} from '../../../db/normalizers/processes_normalizers.js';

/**
 * Resolver for all processes.
 */
export const processesResolver = () => {
  return query(selectAllProcesses)
    .then((result) => {
      const data = result.rows;
      return normalizeProcesses(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for process by id.
 *
 * @param {int} process_id the id of the process
 */
export const processByIdResolver = (process_id) => {
  return query(selectProcessById, [process_id])
    .then((result) => {
      const data = result.rows;
      return normalizeProcessById(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for origin by name. Retrieves all origins that have the inputted string <name> within their full name.
 *
 * @param {string} name the name of the origin
 */
export const processesByNameResolver = (name) => {
  return query(selectProcessesByName, [`%${name}%`])
    .then((result) => {
      const data = result.rows;
      return normalizeProcessesByName(data);
    })
    .catch((e) => console.error(e.stack));
};

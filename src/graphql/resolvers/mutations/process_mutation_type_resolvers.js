/**
 * Processes Mutation Resolvers. Fetches the information for processes on a GraphQL request. Do I need this?
 */
import { query } from "../../../db/index.js";
import { insertIntoProcesses } from "../../../db/queries/processes_queries.js";

/**
 * Resolver mutation for all processes.
 */
export const processesMutationResolver = (processNames) => {
  // processNames should just be an array of names at this point, so no need to really do much manipulation.
  return;
  return query(insertIntoProcesses, [processNames])
    .then((result) => {
      const data = result.rows[0];
      return data;
    })
    .catch((e) => console.error(e.stack));
};

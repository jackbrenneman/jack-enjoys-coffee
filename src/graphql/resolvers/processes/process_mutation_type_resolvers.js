/**
 * Processes Mutation Resolvers. Fetches the information for processes on a GraphQL request.
 */
import { query } from '../../../db/index.js';
import { insertIntoProcesses } from '../../../db/queries/processes_queries.js';

/**
 * Resolver mutation for all processes.
 */
export const processesMutationResolver = (processNames) => {
  // Determine if we're trynna enter multiple processes, or just one, and handle accordingly.
  if (processNames.length > 1) {
    // Insert multiple origins
    console.log('attempting multiple processes write to DB', processNames);
    return;
  }
  // Insert one, measly process.
  return query(insertIntoProcesses, [processNames[0]])
    .then((result) => {
      const data = result.rows[0];
      console.log(data);
      return data;
    })
    .catch((e) => console.error(e.stack));
};

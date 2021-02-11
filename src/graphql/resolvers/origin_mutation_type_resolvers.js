/**
 * Origins Mutation Resolvers. Fetches the information for origins on a GraphQL request.
 */
import { query } from '../../db/index.js';
import { insertIntoOrigins } from '../../db/queries/origin_queries.js';

/**
 * Resolver mutation for all origins.
 */
export const originsMutationResolver = (originNames) => {
  // Determine if we're trynna enter multiple origins, or just one, and handle accordingly.
  if (originNames.length > 1) {
    // Insert multiple origins
    console.log('attempting multiple origins write to DB', originNames);
    return;
  }
  // Insert one, measly origin.
  return query(insertIntoOrigins, [originNames[0]])
    .then((result) => {
      const data = result.rows[0];
      console.log(data);
      return data;
    })
    .catch((e) => console.error(e.stack));
};

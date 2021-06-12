/**
 * Origins Mutation Resolvers. Fetches the information for origins on a GraphQL request.
 */
import { query } from '../../../db/index.js';
import { insertIntoOrigins } from '../../../db/queries/origins_queries.js';

/**
 * Resolver mutation for all origins.
 */
export const originsMutationResolver = (origin, user_id) => {
  return query(insertIntoOrigins, [origin, user_id])
    .then((result) => {
      const data = result.rows[0];
      return data;
    })
    .catch((e) => console.error(e.stack));
};

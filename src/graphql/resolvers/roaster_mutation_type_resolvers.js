/**
 * Roaster Mutation Resolvers. Fetches the information for roasters on a GraphQL request.
 */
import { query } from '../../db/index.js';
import { insertIntoRoaster } from '../../db/queries/roasters_queries.js';
import { normalizeRoasters } from '../../db/normalizers/roasters_normalizers.js';

/**
 * Resolver mutation for all roasters.
 */
export const roastersMutationResolver = () => {
  return query(insertIntoRoaster)
    .then((result) => {
      const data = result.rows;
      return normalizeRoasters(data);
    })
    .catch((e) => console.error(e.stack));
};

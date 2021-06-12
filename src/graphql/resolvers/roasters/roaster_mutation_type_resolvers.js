/**
 * Roaster Mutation Resolvers. Fetches the information for roasters on a GraphQL request.
 */
import { query } from '../../../db/index.js';
import { insertIntoRoasters } from '../../../db/queries/roasters_queries.js';
import { normalizeRoasters } from '../../../db/normalizers/roasters_normalizers.js';

/**
 * Resolver mutation for all roasters.
 */
export const roastersMutationResolver = (roaster, user_id) => {
  // First, get the roasters into an array of the value entries for queries
  const roasterData = Object.values({ ...roaster, user_id });
  return query(insertIntoRoasters, roasterData)
    .then((result) => {
      const data = result.rows[0];
      return normalizeRoasters(data);
    })
    .catch((e) => console.error(e));
};

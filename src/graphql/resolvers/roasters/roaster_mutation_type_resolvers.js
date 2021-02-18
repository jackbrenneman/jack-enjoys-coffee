/**
 * Roaster Mutation Resolvers. Fetches the information for roasters on a GraphQL request.
 */
import { query } from '../../../db/index.js';
import { insertIntoRoasters } from '../../../db/queries/roasters_queries.js';
import { normalizeRoasters } from '../../../db/normalizers/roasters_normalizers.js';

/**
 * Resolver mutation for all roasters.
 */
export const roastersMutationResolver = (roasters) => {
  // First, get the roasters into an array of the value entries for queries
  const roasterData = roasters.map(
    (roaster) => `(${Object.values(roaster).toString()})`
  );
  console.log(roasterData);
  return;
  // Then insert it
  return query(insertIntoRoasters, roasterData)
    .then((result) => {
      const data = result.rows;
      return normalizeRoasters(data);
    })
    .catch((e) => console.error(e.stack));
};

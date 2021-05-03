/**
 * Waters Mutation Resolvers. Fetches the information for waters on a GraphQL request.
 */
import { query } from '../../../db/index.js';
import { insertIntoWaters } from '../../../db/queries/waters_queries.js';

/**
 * Resolver mutation for all waters.
 */
export const watersMutationResolver = (water) => {
  // First, get the waters into an array of the value entries for queries
  const waterData = Object.values(water);
  return query(insertIntoWaters, waterData)
    .then((result) => {
      const data = result.rows[0];
      return data;
    })
    .catch((e) => console.error(e.stack));
};

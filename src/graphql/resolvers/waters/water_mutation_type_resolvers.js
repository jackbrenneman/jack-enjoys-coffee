/**
 * Waters Mutation Resolvers. Fetches the information for waters on a GraphQL request.
 */
import { query } from '../../../db/index.js';
import { insertIntoWaters } from '../../../db/queries/waters_queries.js';

/**
 * Resolver mutation for all waters.
 */
export const watersMutationResolver = (waters) => {
  // First, get the waters into an array of the value entries for queries
  const waterData = waters.map(
    (water) => `(${Object.values(water).toString()})`
  );
  console.log(waterData);
  return;
  return query(insertIntoWaters, [waters[0]])
    .then((result) => {
      const data = result.rows[0];
      console.log(data);
      return data;
    })
    .catch((e) => console.error(e.stack));
};

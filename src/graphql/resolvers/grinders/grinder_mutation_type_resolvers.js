/**
 * Grinders Mutation Resolvers. Writes information for grinders through GraphQL.
 */
import { query } from '../../../db/index.js';
import { insertIntoGrinders } from '../../../db/queries/grinders_queries.js';

/**
 * Resolver mutation for all grinders.
 */
export const grindersMutationResolver = (grinders) => {
  // First, get the grinders into an array of the value entries for queries
  const grinderData = grinders.map(
    (brewer) => `(${Object.values(brewer).toString()})`
  );
  console.log(grinderData);
  return;
  return query(insertIntoGrinders, [grinders])
    .then((result) => {
      const data = result.rows[0];
      console.log(data);
      return data;
    })
    .catch((e) => console.error(e.stack));
};

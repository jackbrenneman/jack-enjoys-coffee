/**
 * Grinders Mutation Resolvers. Writes information for grinders through GraphQL.
 */
import { query } from '../../../db/index.js';
import { insertIntoGrinders } from '../../../db/queries/grinders_queries.js';

/**
 * Resolver mutation for all grinders.
 */
export const grindersMutationResolver = (grinder) => {
  // First, get the grinders into an array of the value entries for queries
  const grinderData = Object.values(grinder);
  return query(insertIntoGrinders, grinderData)
    .then((result) => {
      const data = result.rows[0];
      return data;
    })
    .catch((e) => console.error(e.stack));
};

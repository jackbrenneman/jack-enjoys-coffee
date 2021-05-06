/**
 * Brewers Mutation Resolvers. Writes information for brewers through GraphQL.
 */
import { query } from '../../../db/index.js';
import { insertIntoBrewers } from '../../../db/queries/brewers_queries.js';

/**
 * Resolver mutation for all brewers.
 */
export const brewersMutationResolver = (brewer) => {
  // First, get the brewers into an array of the value entries for queries
  const brewerData = Object.values(brewer);
  return query(insertIntoBrewers, brewerData)
    .then((result) => {
      const data = result.rows[0];
      return data;
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Brewers Mutation Resolvers. Writes information for brewers through GraphQL.
 */
import { query } from '../../../db/index.js';
import { insertIntoBrewers } from '../../../db/queries/brewers_queries.js';

/**
 * Resolver mutation for all brewers.
 */
export const brewersMutationResolver = (brewers) => {
  // First, get the waters into an array of the value entries for queries
  const brewerData = brewers.map(
    (brewer) => `(${Object.values(brewer).toString()})`
  );
  console.log(brewerData);
  return;
  return query(insertIntoBrewers, [brewers])
    .then((result) => {
      const data = result.rows[0];
      console.log(data);
      return data;
    })
    .catch((e) => console.error(e.stack));
};

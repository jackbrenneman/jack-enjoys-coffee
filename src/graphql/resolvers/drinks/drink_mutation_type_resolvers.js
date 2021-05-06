/**
 * Drinks Mutation Resolvers. Writes information for drinks through GraphQL.
 */
import { query } from '../../../db/index.js';
import { insertIntoDrinks } from '../../../db/queries/drinks_queries.js';

/**
 * Resolver mutation for all drinks.
 */
export const drinksMutationResolver = (drink) => {
  // First, get the drinks into an array of the value entries for queries
  const drinkData = Object.values(drink);
  return query(insertIntoDrinks, drinkData)
    .then((result) => {
      const data = result.rows[0];
      return data;
    })
    .catch((e) => console.error(e.stack));
};

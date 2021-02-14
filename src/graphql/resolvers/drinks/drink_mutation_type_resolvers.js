/**
 * Drinks Mutation Resolvers. Writes information for drinks through GraphQL.
 */
import { query } from '../../../db/index.js';
import { insertIntoDrinks } from '../../../db/queries/drinks_queries.js';

/**
 * Resolver mutation for all drinks.
 */
export const drinksMutationResolver = (drinks) => {
  // First, get the drinks into an array of the value entries for queries
  const drinkData = drinks.map(
    (water) => `(${Object.values(water).toString()})`
  );
  console.log(drinkData);
  return;
  return query(insertIntoDrinks, [drinks])
    .then((result) => {
      const data = result.rows[0];
      console.log(data);
      return data;
    })
    .catch((e) => console.error(e.stack));
};

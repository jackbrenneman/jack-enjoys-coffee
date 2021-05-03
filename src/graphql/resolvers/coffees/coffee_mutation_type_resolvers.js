/**
 * Roaster Mutation Resolvers. Fetches the information for roasters on a GraphQL request.
 */
import { query } from '../../../db/index.js';
import { insertIntoCoffees } from '../../../db/queries/coffees_queries.js';
import { normalizeCoffeesMutation } from '../../../db/normalizers/coffees_normalizers.js';

/**
 * Resolver mutation for all coffees.
 */
export const coffeesMutationResolver = (coffee) => {
  // First, get the coffees into an array of the value entries for queries
  const coffeeData = Object.values(coffee);
  return query(insertIntoCoffees, coffeeData)
    .then((result) => {
      const data = result.rows[0];
      // normalizeCoffees returns an array. Since we're only adding one at at time, we can safely return the first
      return normalizeCoffeesMutation(data);
    })
    .catch((e) => console.error(e.stack));
};

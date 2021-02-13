/**
 * Roaster Mutation Resolvers. Fetches the information for roasters on a GraphQL request.
 */
import { query } from '../../../db/index.js';
import { insertIntoCoffees } from '../../../db/queries/coffees_queries.js';
import { normalizeCoffees } from '../../../db/normalizers/coffees_normalizers.js';

/**
 * Resolver mutation for all coffees.
 */
export const coffeesMutationResolver = (roaster) => {
  return query(insertIntoCoffees, roaster)
    .then((result) => {
      const data = result.rows;
      return normalizeCoffees(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Origins Mutation Resolvers. Fetches the information for origins on a GraphQL request.
 */
import { query } from '../../../db/index.js';
import { insertIntoOrigins } from '../../../db/queries/origins_queries.js';

/**
 * Resolver mutation for all origins.
 */
export const originsMutationResolver = (originNames) => {
  // originNames should just be an array of names at this point, so no need to really do much manipulation.
  console.log(originNames);
  return;
  return query(insertIntoOrigins, [originNames])
    .then((result) => {
      const data = result.rows[0];
      console.log(data);
      return data;
    })
    .catch((e) => console.error(e.stack));
};

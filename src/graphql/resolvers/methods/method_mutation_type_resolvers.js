/**
 * Methods Mutation Resolvers. Writes new information for methods on a GraphQL request.
 */
import { query } from '../../../db/index.js';
import { insertIntoMethods } from '../../../db/queries/methods_queries.js';

/**
 * Resolver mutation for all origins.
 */
export const methoodsMutationResolver = (methodNames) => {
  // methodNames should just be an array of names at this point, so no need to really do much manipulation.
  console.log(methodNames);
  return;
  return query(insertIntoMethods, [methodNames])
    .then((result) => {
      const data = result.rows[0];
      console.log(data);
      return data;
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Methods Mutation Resolvers. Writes new information for methods on a GraphQL request. Do I need this?
 */
import { query } from '../../../db/index.js';
import { insertIntoMethods } from '../../../db/queries/methods_queries.js';

/**
 * Resolver mutation for all origins.
 */
export const methoodsMutationResolver = (methodNames) => {
  return;
  return query(insertIntoMethods, [methodNames])
    .then((result) => {
      const data = result.rows[0];
      return data;
    })
    .catch((e) => console.error(e.stack));
};

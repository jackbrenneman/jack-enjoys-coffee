/**
 * User Mutation Resolvers. Fetches the information for users on a GraphQL request.
 */
import { query } from '../../../db/index.js';
import { insertIntoUsers } from '../../../db/queries/users_queries';
import { normalizeUser } from '../../../db/normalizers/users_normalizes.js';

/**
 * Resolver mutation for a specific user.
 */
export const usersMutationResolver = (user) => {
  return;
  // Add the user.
  return query(insertIntoUsers, user)
    .then((result) => {
      const data = result.rows;
      return normalizeUser(data);
    })
    .catch((e) => console.error(e.stack));
};

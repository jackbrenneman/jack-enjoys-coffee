/**
 * Signin Mutation Resolvers. Signs a user in.
 */
import { query } from '../../../db/index.js';
import { signinUser } from '../../../db/queries/users_queries.js';

/**
 * Resolver mutation for signing in a user.
 */
export const signinMutationResolver = (user) => {
  const signinData = Object.values(user);
  return query(signinUser, signinData)
    .then((result) => {
      // This will get us the user_name. If it's not there, the user did not get signed up
      const data = result.rows[0];
      return data;
    })
    .catch((e) => console.error(e.stack));
};

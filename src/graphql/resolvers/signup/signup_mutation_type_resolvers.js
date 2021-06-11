/**
 * Signup Mutation Resolvers. Signs a user up.
 */
import { query } from '../../../db/index.js';
import { signupUser } from '../../../db/queries/users_queries.js';
import { normalizeSignupMutation } from '../../../db/normalizers/signup_normalizers.js';

/**
 * Resolver mutation for signing up a user.
 */
export const signupMutationResolver = (user) => {
  const signupData = Object.values(user);
  return query(signupUser, signupData)
    .then((result) => {
      // This will get us the user data. If it's not there, the user did not get signed up
      const user = result.rows[0];
      return normalizeSignupMutation(user);
    })
    .catch((e) => console.error(e.stack));
};

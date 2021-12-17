/**
 * Signin Mutation Resolvers. Signs a user in.
 */
import { query } from "../../../db/index.js";
import { signinUser } from "../../../db/queries/users_queries.js";
import { normalizeSigninMutation } from "../../../db/normalizers/signin_normalizers.js";

/**
 * Resolver mutation for signing in a user.
 */
export const signinMutationResolver = (user) => {
  const signinData = Object.values(user);
  return query(signinUser, signinData)
    .then((result) => {
      // This will attempt to retrieve the user. If we get nothing back, the user won't be signed in
      const data = result.rows[0];
      return normalizeSigninMutation(data);
    })
    .catch((e) => console.error(e.stack));
};

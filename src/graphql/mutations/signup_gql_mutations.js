/**
 * All GraphQL mutations regarding signing users up.
 */

/**
 * The mutation to write a new User into the users table.
 */
export const signupMutation = `
 mutation CreateUser($input: SignupInput) {
   signup(signup: $input) {
     user {
      user_id
      user_name
      email
     }
     token
   }
 }
`;

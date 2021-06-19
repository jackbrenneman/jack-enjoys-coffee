/**
 * All GraphQL mutations regarding signing users up.
 */

/**
 * The mutation to write a new User into the users table.
 */
export const signupMutation = `
 mutation CreateUser($signup: SignupInput) {
   signup(signup: $signup) {
     user {
       user_id
       user_name
       email
     }
     token
   }
 }
`;

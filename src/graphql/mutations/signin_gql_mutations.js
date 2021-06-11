/**
 * All GraphQL mutations regarding signing users in.
 */

/**
 * The mutation to write a new User into the users table.
 */
export const signinMutation = `
 mutation LoginUser($input: SigninInput) {
   signin(signin: $input) {
     user {
       user_id
       user_name
       email
     }
     token
   }
 }
`;

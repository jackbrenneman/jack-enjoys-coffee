/**
 * All queries related to the "users" table.
 */
export const signinUser =
  'SELECT user_id, user_name, email FROM users WHERE password = crypt($1, password)';
export const signupUser = `
  INSERT INTO users (user_name, password, email) VALUES ($1, crypt($2, gen_salt('md5')), $3) RETURNING user_name, user_id, email
`;

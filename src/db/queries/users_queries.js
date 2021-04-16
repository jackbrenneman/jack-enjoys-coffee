/**
 * All queries related to the "users" table.
 */
export const selectAllUsers = 'SELECT * FROM users';
export const selectUserById = 'SELECT * FROM users WHERE user_id = $1';
export const insertIntoUsers =
  'INSERT INTO users (first_name, last_name) VALUES $1';

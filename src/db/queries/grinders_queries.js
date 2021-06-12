/**
 * All queries related to the "grinders" table.
 */
export const selectAllGrinders = 'SELECT * FROM grinders';
export const selectGrindersByUserId =
  'SELECT * FROM grinders WHERE user_id = $1';
export const selectGrinderById = 'SELECT * FROM grinders WHERE grinder_id = $1';
export const selectGrindersByName =
  'SELECT * FROM grinders WHERE LOWER(name) LIKE LOWER($1)';
export const insertIntoGrinders =
  'INSERT INTO grinders (name, website, user_id) VALUES ($1, $2, $3) RETURNING *';

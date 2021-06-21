/**
 * All queries related to the "grinders" table.
 */
export const selectAllGrinders = 'SELECT * FROM grinders';
export const selectGrindersByUserId =
  'SELECT * FROM grinders WHERE user_id = $1';
export const selectActiveGrindersByUserId =
  'SELECT * FROM grinders WHERE user_id = $1 AND is_active = true';
export const selectGrinderById = 'SELECT * FROM grinders WHERE grinder_id = $1';
export const selectGrindersByName =
  'SELECT * FROM grinders WHERE LOWER(name) LIKE LOWER($1)';
export const insertIntoGrinders =
  'INSERT INTO grinders (name, website, is_active, user_id) VALUES ($1, $2, $3, $4) RETURNING *';
export const deleteGrinder =
  'DELETE FROM grinders WHERE grinder_id = $1 AND user_id = $2';
export const updateGrinder =
  'UPDATE grinders SET name = $1, website = $2, is_active = $3 WHERE grinder_id = $4 AND user_id = $5 RETURNING *';

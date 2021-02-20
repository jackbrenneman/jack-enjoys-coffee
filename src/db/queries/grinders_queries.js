/**
 * All queries related to the "grinders" table.
 */
export const selectAllGrinders = 'SELECT * FROM grinders';
export const selectGrinderById = 'SELECT * FROM grinders WHERE grinder_id = $1';
export const selectGrindersByName =
  'SELECT * FROM grinders WHERE LOWER(name) LIKE LOWER($1)';
export const insertIntoGrinders =
  'INSERT INTO grinders (name, website) VALUES ($1) RETURNING grinder_id, name, website';

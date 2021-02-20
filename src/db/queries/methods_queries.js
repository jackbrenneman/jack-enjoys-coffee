/**
 * All queries related to the "methods" table.
 */
export const selectAllMethods = 'SELECT * FROM methods';
export const selectMethodById = 'SELECT * FROM methods WHERE method_id = $1';
export const selectMethodsByName =
  'SELECT * FROM methods WHERE LOWER(name) LIKE LOWER($1)';
export const insertIntoMethods =
  'INSERT INTO methods (name) VALUES ($1) RETURNING method_id, name';

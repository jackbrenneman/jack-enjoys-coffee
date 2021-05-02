/**
 * All queries related to the "origins" table.
 */
export const selectAllOrigins = 'SELECT * FROM origins';
export const selectOriginById = 'SELECT * FROM origins WHERE origin_id = $1';
export const selectOriginsByName =
  'SELECT * FROM origins WHERE LOWER(name) LIKE LOWER($1)';
export const insertIntoOrigins =
  'INSERT INTO origins (name) VALUES ($1) RETURNING *';

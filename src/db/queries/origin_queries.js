/**
 * All queries related to the "origins" table.
 */
export const selectAllOrigins = 'SELECT * FROM origins';
export const insertIntoOrigins =
  'INSERT INTO origins (name) VALUES ($1) RETURNING origin_id, name';

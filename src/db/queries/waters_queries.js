/**
 * All queries related to the "waters" table.
 */
export const selectAllWaters = 'SELECT * FROM waters';
export const selectAllWatersByUserId =
  'SELECT * FROM waters WHERE user_id = $1';
export const selectWaterById = 'SELECT * FROM waters WHERE water_id = $1';
export const selectWatersByName =
  'SELECT * FROM waters WHERE LOWER(name) LIKE LOWER($1)';
export const insertIntoWaters =
  'INSERT INTO waters (name, description, user_id) VALUES ($1, $2, $3) RETURNING *';

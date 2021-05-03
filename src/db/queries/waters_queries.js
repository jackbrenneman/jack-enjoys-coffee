/**
 * All queries related to the "waters" table.
 */
export const selectAllWaters = 'SELECT * FROM waters';
export const selectWaterById = 'SELECT * FROM waters WHERE water_id = $1';
export const selectWatersByName =
  'SELECT * FROM waters WHERE LOWER(name) LIKE LOWER($1)';
export const insertIntoWaters =
  'INSERT INTO waters (name, description) VALUES ($1, $2) RETURNING *';

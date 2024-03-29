/**
 * All queries related to the "waters" table.
 */
export const selectAllWaters = "SELECT * FROM waters";
export const selectWatersByUserId =
  "SELECT * FROM waters WHERE user_id = $1 ORDER BY is_active DESC";
export const selectActiveWatersByUserId =
  "SELECT * FROM waters WHERE user_id = $1 AND is_active = true";
export const selectWaterById = "SELECT * FROM waters WHERE water_id = $1";
export const selectWatersByName =
  "SELECT * FROM waters WHERE LOWER(name) LIKE LOWER($1)";
export const insertIntoWaters =
  "INSERT INTO waters (name, description, is_active, user_id) VALUES ($1, $2, $3, $4) RETURNING *";
export const deleteWater =
  "DELETE FROM waters WHERE water_id = $1 AND user_id = $2";
export const updateWater =
  "UPDATE waters SET name = $1, description = $2, is_active = $3 WHERE water_id = $4 AND user_id = $5 RETURNING *";

/**
 * All queries related to the "roasters" table.
 */
export const selectAllRoasters = 'SELECT * FROM roasters';
export const selectRoastersByUserId =
  'SELECT * FROM roasters WHERE user_id = $1';
export const selectActiveRoastersByUserId =
  'SELECT * FROM roasters WHERE user_id = $1 AND is_active = true';
export const selectRoasterById = 'SELECT * FROM roasters WHERE roaster_id = $1';
export const selectRoastersByName =
  'SELECT * FROM roasters WHERE LOWER(name) LIKE LOWER($1)';
export const selectRoastersByCity = 'SELECT * FROM roasters WHERE city = $1';
export const selectRoastersByState = 'SELECT * FROM roasters WHERE state = $1';
export const selectRoastersByCountry =
  'SELECT * FROM roasters WHERE country = $1';
export const insertIntoRoasters =
  'INSERT INTO roasters(name, city, state, country, website, is_active, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
export const deleteRoaster =
  'DELETE FROM roasters WHERE roaster_id = $1 AND user_id = $2';
export const updateRoaster =
  'UPDATE roasters SET name = $1, city = $2, state = $3, country = $4, website = $5, is_active = $6 WHERE roaster_id = $7 AND user_id = $8 RETURNING *';

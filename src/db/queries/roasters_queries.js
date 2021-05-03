/**
 * All queries related to the "roasters" table.
 */
export const selectAllRoasters = 'SELECT * FROM roasters';
export const selectRoasterById = 'SELECT * FROM roasters WHERE roaster_id = $1';
export const selectRoastersByName =
  'SELECT * FROM roasters WHERE LOWER(name) LIKE LOWER($1)';
export const selectRoastersByCity = 'SELECT * FROM roasters WHERE city = $1';
export const selectRoastersByState = 'SELECT * FROM roasters WHERE state = $1';
export const selectRoastersByCountry =
  'SELECT * FROM roasters WHERE country = $1';
export const insertIntoRoasters =
  'INSERT INTO roasters(name, city, state, country, website) VALUES ($1, $2, $3, $4, $5) RETURNING *';

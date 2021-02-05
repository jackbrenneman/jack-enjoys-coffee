/**
 * All queries related to the "roasters" table.
 */
export const selectAllRoasters = 'SELECT * FROM roasters';
export const selectRoasterById = 'SELECT * FROM roasters WHERE roaster_id = $1';
export const selectRoasterByName =
  'SELECT * FROM roasters WHERE LOWER(name) LIKE LOWER($1)';
export const selectRoasterByState = 'SELECT * FROM roasters WHERE state = $1';

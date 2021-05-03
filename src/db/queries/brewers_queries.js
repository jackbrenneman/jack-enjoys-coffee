/**
 * All queries related to the "brewers" table.
 */
export const selectAllBrewers = 'SELECT * FROM brewers';
export const selectBrewerById = 'SELECT * FROM brewers WHERE brewer_id = $1';
export const selectBrewersByMethodId =
  'SELECT * FROM brewers WHERE method_id = $1';
export const selectBrewersByName =
  'SELECT * FROM brewers WHERE LOWER(name) LIKE LOWER($1)';
export const insertIntoBrewers =
  'INSERT INTO brewers (name, website, method_id) VALUES ($1, $2, $3) RETURNING *';

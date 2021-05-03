/**
 * All queries related to the "drinks" table.
 */
export const selectAllDrinks = 'SELECT * FROM drinks';
export const selectDrinkById = 'SELECT * FROM drinks WHERE drink_id = $1';
export const selectDrinksByMethodId =
  'SELECT * FROM drinks WHERE method_id = $1';
export const selectDrinksByName =
  'SELECT * FROM drinks WHERE LOWER(name) LIKE LOWER($1)';
export const insertIntoDrinks =
  'INSERT INTO drinks (name, method_id) VALUES ($1, $2) RETURNING *';

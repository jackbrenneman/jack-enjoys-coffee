/**
 * All queries related to the "cafes" table.
 */
 export const selectAllCafe = 'SELECT * FROM cafes';
 export const selectCafesByUserId =
   'SELECT * FROM cafes WHERE user_id = $1 ORDER BY is_active DESC';
 export const selectActiveCafesByUserId =
   `SELECT * FROM cafes WHERE cafes.user_id = $1 AND cafes.is_active = true`;
 export const selectCafeById = 'SELECT * FROM cafes WHERE cafe_id = $1';
 export const selectCafesByName =
   'SELECT * FROM cafes WHERE LOWER(name) LIKE LOWER($1)';
 export const selectCafesByCity = 'SELECT * FROM cafes WHERE city = $1';
 export const selectCafesByState = 'SELECT * FROM cafes WHERE state = $1';
 export const selectCafesByCountry =
   'SELECT * FROM cafes WHERE country = $1';
 export const insertIntoCafes =
   'INSERT INTO cafes(name, city, state, country, website, is_active, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
 export const deleteCafe =
   'DELETE FROM cafes WHERE cafe_id = $1 AND user_id = $2';
 export const updateCafe =
   'UPDATE cafes SET name = $1, city = $2, state = $3, country = $4, website = $5, is_active = $6 WHERE cafe_id = $7 AND user_id = $8 RETURNING *';

/**
 * All queries related to the "drinks" table.
 */
export const selectAllDrinks = `
  SELECT
  drinks.drink_id AS drink_id,
  drinks.name AS drink_name,
  drinks.method_id AS method_id,
  methods.name AS method_name
  FROM drinks
  INNER JOIN methods ON drinks.method_id = methods.method_id
`;
export const selectDrinksByUserId = `
  SELECT
  drinks.drink_id AS drink_id,
  drinks.name AS drink_name,
  drinks.method_id AS method_id,
  methods.name AS method_name
  FROM drinks
  INNER JOIN methods ON drinks.method_id = methods.method_id
  WHERE drinks.user_id = $1
`;
export const selectDrinkById = `
  SELECT
  drinks.drink_id AS drink_id,
  drinks.name AS drink_name,
  drinks.method_id AS method_id,
  methods.name AS method_name
  FROM drinks
  INNER JOIN methods ON drinks.method_id = methods.method_id
  WHERE drinks.drink_id = $1
`;
export const selectDrinksByMethodId = `
  SELECT
  drinks.drink_id AS drink_id,
  drinks.name AS drink_name,
  drinks.method_id AS method_id,
  methods.name AS method_name
  FROM drinks
  INNER JOIN methods ON drinks.method_id = methods.method_id
  WHERE drinks.method_id = $1
`;
export const selectDrinksByName = `
  SELECT
  drinks.drink_id AS drink_id,
  drinks.name AS drink_name,
  drinks.method_id AS method_id,
  methods.name AS method_name
  FROM drinks
  INNER JOIN methods ON drinks.method_id = methods.method_id
  WHERE LOWER(drinks.name) LIKE LOWER($1)
`;
export const insertIntoDrinks =
  "INSERT INTO drinks (name, method_id, user_id) VALUES ($1, $2, $3) RETURNING *";
export const deleteDrink =
  "DELETE FROM drinks WHERE drink_id = $1 AND user_id = $2";
export const updateDrink =
  "UPDATE drinks SET name = $1, method_id = $2 WHERE drink_id = $3 AND user_id = $4 RETURNING *";

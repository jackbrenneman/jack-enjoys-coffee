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
  'INSERT INTO drinks (name, method_id) VALUES ($1, $2) RETURNING *';

/**
 * All queries related to the "users" table.
 */
export const signinUser = `
  SELECT user_id, user_name, email FROM users WHERE user_name = $1 AND password = crypt($2, password)
`;
export const signupUser = `
  INSERT INTO users (user_name, password, email) VALUES ($1, crypt($2, gen_salt('md5')), $3) RETURNING user_name, user_id, email
`;
export const selectUserDataQuery = `
  SELECT user_id, user_name, email FROM users WHERE user_id = $1
`;

export const selectStartDate = `
  SELECT
  MIN(date) AS start_date
  FROM coffee_entries
  WHERE user_id = $1
`;

export const selectTotalCoffeeEntries = `
  SELECT
  COUNT(coffee_entries.coffee_entry_id)
  FROM coffee_entries
  WHERE coffee_entries.user_id = $1
`;

export const selectTotalCoffeeIn = `
  SELECT
  SUM(coffee_entries.coffee_in)
  FROM coffee_entries
  WHERE coffee_entries.user_id = $1
`;

export const selectTotalLiquidOut = `
  SELECT
  SUM(coffee_entries.liquid_out)
  FROM coffee_entries
  WHERE coffee_entries.user_id = $1
`;

export const selectTotalWaterIn = `
  SELECT
  SUM(coffee_entries.water_in)
  FROM coffee_entries
  WHERE coffee_entries.user_id = $1
`;

export const selectUniqueCoffeeCount = `
  SELECT
  COUNT(DISTINCT coffee_entries.coffee_id)
  FROM coffee_entries
  WHERE coffee_entries.user_id = $1
`;

export const selectUniqueRoasterCount = `
  SELECT
  COUNT(coffee_entries.coffee_entry_id),
  COUNT(DISTINCT coffees.roaster_id) AS total_unique_roasters
  FROM coffee_entries
  LEFT JOIN coffees ON coffee_entries.coffee_id = coffees.coffee_id
  WHERE coffee_entries.user_id = $1
`;

export const selectMethodAndDrinkData = `
  SELECT
  coffee_entries.method_id,
  methods.name AS method_name,
  coffee_entries.drink_id,
  drinks.name AS drink_name,
  COUNT(coffee_entries.drink_id) AS drink_count,
  SUM(coffee_entries.coffee_in) AS total_coffee_in,
  SUM(coffee_entries.liquid_out) AS total_espresso_liquid_out,
  SUM(coffee_entries.steep_time) AS total_steep_time,
  SUM(coffee_entries.water_in) AS total_water_in
  FROM coffee_entries
  LEFT JOIN drinks ON coffee_entries.drink_id = drinks.drink_id
  LEFT JOIN methods ON coffee_entries.method_id = methods.method_id
  WHERE coffee_entries.user_id = $1
  GROUP BY coffee_entries.drink_id, coffee_entries.method_id, methods.name, drinks.name
  ORDER BY method_id
`;

/**
 * All queries related to the "coffees" table.
 */
export const selectAllCoffees = `
  SELECT
  coffees.coffee_id AS coffee_id,
  coffees.name AS coffee_name,
  coffees.roaster_id AS roaster_id,
  coffees.is_active AS is_active,
  roasters.name AS roaster_name,
  roasters.city AS roaster_city,
  roasters.state AS roaster_state,
  roasters.country AS roaster_country,
  roasters.website AS roaster_website,
  coffees.origin_id AS origin_id,
  origins.name AS origin_name,
  coffees.process_id AS process_id,
  processes.name AS process_name
  FROM coffees
  INNER JOIN roasters ON coffees.roaster_id = roasters.roaster_id
  INNER JOIN origins ON coffees.origin_id = origins.origin_id
  INNER JOIN processes ON coffees.process_id = processes.process_id
`;
export const selectCoffeesByUserId = `
  SELECT
  coffees.coffee_id AS coffee_id,
  coffees.name AS coffee_name,
  coffees.roaster_id AS roaster_id,
  coffees.is_active AS is_active,
  roasters.name AS roaster_name,
  roasters.city AS roaster_city,
  roasters.state AS roaster_state,
  roasters.country AS roaster_country,
  roasters.website AS roaster_website,
  coffees.origin_id AS origin_id,
  origins.name AS origin_name,
  coffees.process_id AS process_id,
  processes.name AS process_name
  FROM coffees
  INNER JOIN roasters ON coffees.roaster_id = roasters.roaster_id
  INNER JOIN origins ON coffees.origin_id = origins.origin_id
  INNER JOIN processes ON coffees.process_id = processes.process_id
  WHERE coffees.user_id = $1
  ORDER BY is_active DESC
`;
export const selectActiveCoffeesByUserId = `
  SELECT
  coffees.coffee_id AS coffee_id,
  coffees.name AS coffee_name,
  coffees.roaster_id AS roaster_id,
  coffees.is_active AS is_active,
  roasters.name AS roaster_name,
  roasters.city AS roaster_city,
  roasters.state AS roaster_state,
  roasters.country AS roaster_country,
  roasters.website AS roaster_website,
  coffees.origin_id AS origin_id,
  origins.name AS origin_name,
  coffees.process_id AS process_id,
  processes.name AS process_name
  FROM coffees
  INNER JOIN roasters ON coffees.roaster_id = roasters.roaster_id
  INNER JOIN origins ON coffees.origin_id = origins.origin_id
  INNER JOIN processes ON coffees.process_id = processes.process_id
  WHERE coffees.user_id = $1
  AND coffees.is_active = true
`;
export const selectCoffeeById = `
  SELECT
  coffees.coffee_id AS coffee_id,
  coffees.name AS coffee_name,
  coffees.roaster_id AS roaster_id,
  coffees.is_active AS is_active,
  roasters.name AS roaster_name,
  roasters.city AS roaster_city,
  roasters.state AS roaster_state,
  roasters.country AS roaster_country,
  roasters.website AS roaster_website,
  coffees.origin_id AS origin_id,
  origins.name AS origin_name,
  coffees.process_id AS process_id,
  processes.name AS process_name
  FROM coffees
  INNER JOIN roasters ON coffees.roaster_id = roasters.roaster_id
  INNER JOIN origins ON coffees.origin_id = origins.origin_id
  INNER JOIN processes ON coffees.process_id = processes.process_id
  WHERE coffees.coffee_id = $1
`;
export const selectCoffeesByName = `
  SELECT
  coffees.coffee_id AS coffee_id,
  coffees.name AS coffee_name,
  coffees.roaster_id AS roaster_id,
  coffees.is_active AS is_active,
  roasters.name AS roaster_name,
  roasters.city AS roaster_city,
  roasters.state AS roaster_state,
  roasters.country AS roaster_country,
  roasters.website AS roaster_website,
  coffees.origin_id AS origin_id,
  origins.name AS origin_name,
  coffees.process_id AS process_id,
  processes.name AS process_name
  FROM coffees
  INNER JOIN roasters ON coffees.roaster_id = roasters.roaster_id
  INNER JOIN origins ON coffees.origin_id = origins.origin_id
  INNER JOIN processes ON coffees.process_id = processes.process_id
  WHERE LOWER(coffees.name) LIKE LOWER($1)
`;
export const selectCoffeesByRoasterId = `
  SELECT
  coffees.coffee_id AS coffee_id,
  coffees.name AS coffee_name,
  coffees.roaster_id AS roaster_id,
  coffees.is_active AS is_active,
  roasters.name AS roaster_name,
  roasters.city AS roaster_city,
  roasters.state AS roaster_state,
  roasters.country AS roaster_country,
  roasters.website AS roaster_website,
  coffees.origin_id AS origin_id,
  origins.name AS origin_name,
  coffees.process_id AS process_id,
  processes.name AS process_name
  FROM coffees
  INNER JOIN roasters ON coffees.roaster_id = roasters.roaster_id
  INNER JOIN origins ON coffees.origin_id = origins.origin_id
  INNER JOIN processes ON coffees.process_id = processes.process_id
  WHERE coffees.roaster_id = $1
`;
export const selectCoffeesByOriginId = `
  SELECT
  coffees.coffee_id AS coffee_id,
  coffees.name AS coffee_name,
  coffees.roaster_id AS roaster_id,
  coffees.is_active AS is_active,
  roasters.name AS roaster_name,
  roasters.city AS roaster_city,
  roasters.state AS roaster_state,
  roasters.country AS roaster_country,
  roasters.website AS roaster_website,
  coffees.origin_id AS origin_id,
  origins.name AS origin_name,
  coffees.process_id AS process_id,
  processes.name AS process_name
  FROM coffees
  INNER JOIN roasters ON coffees.roaster_id = roasters.roaster_id
  INNER JOIN origins ON coffees.origin_id = origins.origin_id
  INNER JOIN processes ON coffees.process_id = processes.process_id
  WHERE coffees.origin_id = $1
`;
export const selectCoffeesByProcessId = `
  SELECT
  coffees.coffee_id AS coffee_id,
  coffees.name AS coffee_name,
  coffees.roaster_id AS roaster_id,
  coffees.is_active AS is_active,
  roasters.name AS roaster_name,
  roasters.city AS roaster_city,
  roasters.state AS roaster_state,
  roasters.country AS roaster_country,
  roasters.website AS roaster_website,
  coffees.origin_id AS origin_id,
  origins.name AS origin_name,
  coffees.process_id AS process_id,
  processes.name AS process_name
  FROM coffees
  INNER JOIN roasters ON coffees.roaster_id = roasters.roaster_id
  INNER JOIN origins ON coffees.origin_id = origins.origin_id
  INNER JOIN processes ON coffees.process_id = processes.process_id
  WHERE coffees.process_id = $1
`;
export const insertIntoCoffees =
  "INSERT INTO coffees (name, roaster_id, origin_id, process_id, is_active, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
export const deleteCoffee =
  "DELETE FROM coffees WHERE coffee_id = $1 AND user_id = $2";
export const updateCoffee =
  "UPDATE coffees SET name = $1, roaster_id = $2, origin_id = $3, process_id = $4, is_active = $5 WHERE coffee_id = $6 AND user_id = $7 RETURNING *";

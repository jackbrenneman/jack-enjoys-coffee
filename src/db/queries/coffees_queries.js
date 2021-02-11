/**
 * All queries related to the "coffees" table.
 */
export const selectAllCoffees = 'SELECT * FROM coffees';
export const selectCoffeeById = 'SELECT * FROM coffees WHERE coffee_id = $1';
export const selectCoffeesByName =
  'SELECT * FROM coffees WHERE LOWER(name) LIKE LOWER($1)';
export const selectCoffeesByRoasterId =
  'SELECT * FROM coffees WHERE roaster_id = $1';
export const selectCoffeesByOriginId =
  'SELECT * FROM coffees WHERE origin_id = $1';
export const selectCoffeesByProcessId =
  'SELECT * FROM coffees WHERE process_id = $1';
export const insertIntoCoffees = 'INSERT';

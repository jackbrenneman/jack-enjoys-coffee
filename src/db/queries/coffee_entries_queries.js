/**
 * All queries related to the "coffee_entries" table.
 */
export const selectAllCoffeeEntries = 'SELECT * FROM coffee_entries';
export const selectCoffeeEntriesByUserId = `
  SELECT
    coffee_entries.coffee_entry_id,
    coffee_entries.brewer_id,
    coffee_entries.date,
    coffee_entries.user_id,
    coffee_entries.grinder_id,
    coffee_entries.coffee_id,
    coffee_entries.drink_id,
    coffee_entries.method_id,
    coffees.name AS coffee_name,
    methods.name AS method_name,
    origins.origin_id AS origin_id,
    origins.name AS origin_name,
    processes.process_id AS process_id,
    processes.name AS process_name,
    roasters.roaster_id AS roaster_id,
    roasters.name AS roaster_name,
    drinks.name AS drink_name,
    brewers.name AS brewer_name,
    grinders.name AS grinder_name,
    waters.name AS water_name,
    coffee_entries.coffee_in,
    coffee_entries.liquid_out,
    coffee_entries.water_id,
    coffee_entries.water_in,
    coffee_entries.steep_time,
    coffee_entries.grinder_setting,
    coffee_entries.rating,
    coffee_entries.notes
  FROM coffee_entries
  LEFT JOIN users ON coffee_entries.user_id = users.user_id
  LEFT JOIN coffees ON coffee_entries.coffee_id = coffees.coffee_id
  LEFT JOIN roasters ON coffees.roaster_id = roasters.roaster_id
  LEFT JOIN processes ON coffees.process_id = processes.process_id
  LEFT JOIN origins ON coffees.origin_id = origins.origin_id
  LEFT JOIN methods ON coffee_entries.method_id = methods.method_id
  LEFT JOIN drinks ON coffee_entries.drink_id = drinks.drink_id
  LEFT JOIN brewers ON coffee_entries.brewer_id = brewers.brewer_id
  LEFT JOIN grinders ON coffee_entries.grinder_id = grinders.grinder_id
  LEFT JOIN waters ON coffee_entries.water_id = waters.water_id
  WHERE coffee_entries.user_id = $1
`;
export const selectCoffeeEntriesByUserIdAndDateRange = `
  SELECT
    coffee_entries.coffee_entry_id,
    coffee_entries.brewer_id,
    coffee_entries.date,
    coffee_entries.user_id,
    coffee_entries.grinder_id,
    coffee_entries.coffee_id,
    coffee_entries.drink_id,
    coffee_entries.method_id,
    coffees.name AS coffee_name,
    methods.name AS method_name,
    origins.origin_id AS origin_id,
    origins.name AS origin_name,
    processes.process_id AS process_id,
    processes.name AS process_name,
    roasters.roaster_id AS roaster_id,
    roasters.name AS roaster_name,
    drinks.name AS drink_name,
    brewers.name AS brewer_name,
    grinders.name AS grinder_name,
    waters.name AS water_name,
    coffee_entries.coffee_in,
    coffee_entries.liquid_out,
    coffee_entries.water_id,
    coffee_entries.water_in,
    coffee_entries.steep_time,
    coffee_entries.grinder_setting,
    coffee_entries.rating,
    coffee_entries.notes
  FROM coffee_entries
  LEFT JOIN users ON coffee_entries.user_id = users.user_id
  LEFT JOIN coffees ON coffee_entries.coffee_id = coffees.coffee_id
  LEFT JOIN roasters ON coffees.roaster_id = roasters.roaster_id
  LEFT JOIN processes ON coffees.process_id = processes.process_id
  LEFT JOIN origins ON coffees.origin_id = origins.origin_id
  LEFT JOIN methods ON coffee_entries.method_id = methods.method_id
  LEFT JOIN drinks ON coffee_entries.drink_id = drinks.drink_id
  LEFT JOIN brewers ON coffee_entries.brewer_id = brewers.brewer_id
  LEFT JOIN grinders ON coffee_entries.grinder_id = grinders.grinder_id
  LEFT JOIN waters ON coffee_entries.water_id = waters.water_id
  WHERE coffee_entries.user_id = $1 AND coffee_entries.date >= $2 AND coffee_entries.date <= $3
  ORDER BY coffee_entries.date DESC;
`;
export const insertIntoCoffeeEntries = `
  INSERT INTO coffee_entries
    (
      user_id,
      date,
      cafe_id,
      coffee_id,
      method_id,
      brewer_id,
      drink_id,
      grinder_id,
      grinder_setting,
      water_id,
      coffee_in,
      liquid_out,
      water_in,
      steep_time,
      notes,
      rating
    )
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
  RETURNING *
`;
export const deleteCoffeeEntry =
  'DELETE FROM coffee_entries WHERE coffee_entry_id = $1 AND user_id = $2';
export const updateCoffeeEntry = `
  UPDATE coffee_entries
  SET
    date = $1,
    cafe_id = $2,
    coffee_id = $3,
    method_id = $4,
    brewer_id = $5,
    drink_id = $6,
    grinder_id = $7,
    grinder_setting = $8,
    water_id = $9,
    coffee_in = $10,
    liquid_out = $11,
    water_in = $12,
    steep_time = $13,
    notes = $14,
    rating = $15
  WHERE coffee_entry_id = $16 AND user_id = $17
  RETURNING *
`;

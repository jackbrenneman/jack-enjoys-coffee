/**
 * Normalizers for any queries regarding Coffee Entries.
 */
export const normalizeCoffeeEntries = (data) => {
  const coffeeEntries = data.map((coffeeEntry) => {
    // Need to get data into the correct shape, matching the GraphQL types
    const {
      brewer_id,
      brewer_name,
      coffee_entry_id,
      coffee_id,
      coffee_in,
      coffee_name,
      date,
      drink_id,
      drink_name,
      grinder_id,
      grinder_name,
      grinder_setting,
      liquid_out,
      method_id,
      method_name,
      notes,
      origin_id,
      origin_name,
      process_id,
      process_name,
      rating,
      roaster_id,
      roaster_name,
      steep_time,
      user_id,
      water_in,
      water_id,
      water_name,
    } = coffeeEntry;
    const coffee = {
      coffee_id,
      name: coffee_name,
      roaster: { roaster_id, name: roaster_name },
      origin: { origin_id, name: origin_name },
      process: { process_id, name: process_name },
    };
    const drink = { drink_id, name: drink_name };
    const brewer = { brewer_id, name: brewer_name };
    const grinder = { grinder_id, name: grinder_name };
    const grind = { grinder, setting: grinder_setting };
    const water = { water_id, name: water_name };
    const brew = {
      method: {
        name: method_name,
        method_id,
        category: method_id,
        coffee_in,
        drink,
        brewer,
        liquid_out,
        steep_time,
        water_in,
      },
      grind,
      water,
    };
    const normalizedCoffeeEntry = {
      coffee_entry_id,
      date,
      coffee,
      brew,
      notes,
      rating,
      user_id,
    };
    return normalizedCoffeeEntry;
  });
  return coffeeEntries;
};

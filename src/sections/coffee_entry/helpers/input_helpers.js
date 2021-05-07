/**
 * Helpers for the coffee entry input page.
 */

/**
 * Creates a mapping of roaster_ids to coffees so users can filter coffees by roaster when selecting a coffee for a coffee entry
 * @param {array} coffees the coffees array, in the form:
 *   [
 *     {
 *       coffee_id: 1,
 *       name: "Coffee Name",
 *       roaster: {
 *         roaster_id: 1,
 *         name: "Roaster Name"
 *       }
 *     }
 *     ...
 *   ]
 * @returns {object} an object that maps roaster_id to coffees, in the form:
 *   {
 *     1: [
 *          {...coffee from Roaster 1},
 *          {...coffee from Roaster 1},
 *          ....
 *        ],
 *     2: [...],
 *     ...
 *   }
 *
 */
export const createRoasterIdToCoffeesMap = (coffees) => {
  const roasterToCoffeesMap = coffees.reduce((acc, coffee) => {
    const { roaster } = coffee;
    const { roaster_id } = roaster;
    // roaster_id has already been initialized
    if (acc[roaster_id]) {
      acc[roaster_id].push(coffee);
    } else {
      // Otherwise, it's a new roaster so need to create a new key
      acc[roaster_id] = [coffee];
    }
    return acc;
  }, {});
  return roasterToCoffeesMap;
};

/**
 * Creates a mapping of method_ids to brewers so users can find brewers easier
 * @param {array} brewers the brewers array, in the form:
 *   [
 *     {
 *       brewer_id: 1,
 *       name: "Flair Pro 2",
 *       method_id: 1,
 *     }
 *     ...
 *   ]
 * @returns {object} an object that maps method_id to brewers, in the form:
 *   {
 *     1: [
 *          {...brewer 1 for this method},
 *          {...brewer 2 for this method},
 *          ....
 *        ],
 *     2: [...],
 *     ...
 *   }
 *
 */
export const createMethodIdToBrewersMap = (brewers) => {
  const methodToBrewersMap = brewers.reduce((acc, brewer) => {
    const { method_id } = brewer;
    // method_id has already been initialized
    if (acc[method_id]) {
      acc[method_id].push(brewer);
    } else {
      // Otherwise, it's a new roaster so need to create a new key
      acc[method_id] = [brewer];
    }
    return acc;
  }, {});
  return methodToBrewersMap;
};

/**
 * Creates a mapping of method_ids to drinks so users can find drinks easier
 * @param {array} drinks the drinks array, in the form:
 *   [
 *     {
 *       drink_id: 1,
 *       name: "Espresso",
 *       method_id: 1,
 *     }
 *     ...
 *   ]
 * @returns {object} an object that maps method_id to drinks, in the form:
 *   {
 *     1: [
 *          {...drink 1 for this method},
 *          {...drink 2 for this method},
 *          ....
 *        ],
 *     2: [...],
 *     ...
 *   }
 *
 */
export const createMethodIdToDrinksMap = (drinks) => {
  const methodToDrinksMap = drinks.reduce((acc, drink) => {
    const { method_id } = drink;
    // method_id has already been initialized
    if (acc[method_id]) {
      acc[method_id].push(drink);
    } else {
      // Otherwise, it's a new roaster so need to create a new key
      acc[method_id] = [drink];
    }
    return acc;
  }, {});
  return methodToDrinksMap;
};

export const normalizeCoffeeEntryInput = (coffeeEntry) => {
  const { date, coffee_id, brew, notes, rating } = coffeeEntry;
  const {
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
  } = brew;
  return {
    user_id: 1,
    date,
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
    rating,
  };
};

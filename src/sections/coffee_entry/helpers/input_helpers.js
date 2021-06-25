/**
 * Helpers for the coffee entry input page.
 */
import { today } from '../../../consts.js';

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
    const { method } = brewer;
    const { method_id } = method;
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
    const { method } = drink;
    const { method_id } = method;
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

/**
 * Normalizes a coffeeEntry to be in the shape we expect when we want to add it to the DB.
 * @param {object} coffeeEntry in the form:
 *   {
 *      date,
 *      coffee_id,
 *      brew: {
 *        method_id,
 *        brewer_id,
 *        drink_id,
 *        grinder_id,
 *        grinder_setting,
 *        water_id,
 *        coffee_in,
 *        liquid_out,
 *        water_in,
 *        steep_time,
 *      }
 *      notes,
 *      rating,
 *   }
 * @returns {object} in the form:
 *   {
 *      user_id: 1,
 *      date,
 *      coffee_id,
 *      method_id,
 *      brewer_id,
 *      drink_id,
 *      grinder_id,
 *      grinder_setting,
 *      water_id,
 *      coffee_in,
 *      liquid_out,
 *      water_in,
 *      steep_time,
 *      notes,
 *      rating,
 *   }
 *
 */
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
    date,
    coffee_id: coffee_id ?? null,
    method_id: method_id ?? null,
    brewer_id: brewer_id ?? null,
    drink_id: drink_id ?? null,
    grinder_id: grinder_id ?? null,
    grinder_setting: grinder_setting ?? null,
    water_id: water_id ?? null,
    coffee_in: coffee_in ?? null,
    liquid_out: liquid_out ?? null,
    water_in: water_in ?? null,
    steep_time: steep_time ?? null,
    notes: notes ?? null,
    rating: rating ?? null,
  };
};

/**
 * Takes the most recent coffee entry for a user and puts it into the shape of a coffee entry
 *
 * @param {object} mostRecentCoffeeEntry
 *   {
 *     coffee: {
 *       coffee_id
 *     }
 *     brew: {
 *       method: {
 *         method_id,
 *         brewer: {
 *           brewer_id
 *         },
 *         drink: {
 *           drink_id
 *         },
 *         coffee_in,
 *         liquid_out,
 *         water_in,
 *         steep_time
 *       }
 *       grind: {
 *         grinder: {
 *           grinder_id
 *         },
 *         setting
 *       }
 *       water: {
 *         water_id
 *       }
 *     }
 *   }
 *
 * @returns {object} coffee entry in the shape needed for the state
 *   {
 *      date,
 *      coffee_id,
 *      brew: {
 *        method_id,
 *        brewer_id,
 *        drink_id,
 *        grinder_id,
 *        grinder_setting,
 *        water_id,
 *        coffee_in,
 *        liquid_out,
 *        water_in,
 *        steep_time,
 *      }
 *      notes,
 *      rating,
 *   }
 */
export const normalizeMostRecentCoffeeEntryForInput = (
  mostRecentCoffeeEntry
) => {
  const { coffee, brew } = mostRecentCoffeeEntry;
  const { coffee_id } = coffee;
  const { method, grind, water } = brew;
  const {
    method_id,
    brewer,
    drink,
    coffee_in,
    liquid_out,
    water_in,
    steep_time,
  } = method;
  const { setting, grinder } = grind;
  const { grinder_id } = grinder;
  const { brewer_id } = brewer;
  const { drink_id } = drink;
  const { water_id } = water;
  return {
    date: today,
    coffee_id: coffee_id,
    brew: {
      method_id,
      brewer_id,
      drink_id,
      grinder_id,
      grinder_setting: setting,
      water_id,
      coffee_in,
      liquid_out,
      water_in,
      steep_time,
    },
    notes: null,
    rating: null,
  };
};

/**
 * Takes the most recent coffee entry for a user and puts it into the shape to get the names better
 *
 * @param {object} mostRecentCoffeeEntry
 *   {
 *     coffee: {
 *       coffee_id
 *     }
 *     brew: {
 *       method: {
 *         method_id,
 *         brewer: {
 *           brewer_id
 *         },
 *         drink: {
 *           drink_id
 *         },
 *         coffee_in,
 *         liquid_out,
 *         water_in,
 *         steep_time
 *       }
 *       grind: {
 *         grinder: {
 *           grinder_id
 *         },
 *         setting
 *       }
 *       water: {
 *         water_id
 *       }
 *     }
 *   }
 *
 * @returns {object} coffee entry in the shape needed for the state
 *   {
 *      coffee_name,
 *      method_name,
 *      brewer_name,
 *      drink_name,
 *      grinder_name,
 *      grinder_setting,
 *      water_name,
 *      coffee_in,
 *      liquid_out,
 *      water_in,
 *      steep_time,
 *   }
 */
export const normalizeMostRecentCoffeeEntry = (mostRecentCoffeeEntry) => {
  const { coffee = {}, brew = {} } = mostRecentCoffeeEntry;
  const { method = {}, grind = {}, water = {} } = brew;
  return {
    mostRecentCoffee: {
      ...coffee,
    },
    mostRecentBrewData: {
      mostRecentMethod: {
        ...method,
      },
      mostRecentGrind: {
        ...grind,
      },
      mostRecentWater: {
        ...water,
      },
    },
  };
};

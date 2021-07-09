/**
 * Normalizers for any queries regarding users.
 */
export const normalizeUsers = (data) => {
  return data;
};

export const normalizeUsersMutation = (user) => {
  const { user_id, user_name, email } = user;
  return {
    user: {
      user_id,
      user_name,
      email,
    },
    token: 'test',
  };
};

/**
 * Normalizes drink data to be in the correct form for GraphQL
 * @param {array} drinks in the form:
 *   [
 *     {
 *       method_id: 1,
 *       method_name: 'Espresso',
 *       drink_id: 1,
 *       drink_name: 'Straight Espresso',
 *       count: '16'
 *     }
 *     ...
 *   ]
 * @returns {object} the drink data in the form:
 *   {
 *     total_count: 52,
 *     drink_stats: [
 *       {
 *         drink: {
 *           drink_id: 1,
 *           name: 'Straight Espresso',
 *           method: {
 *             method_id: 1,
 *             name: 'Espresso',
 *           }
 *         }
 *         total_count: 16,
 *       }
 *     ]
 *   }
 *
 */
export const normalizeMethodDrinkData = (drinks) => {
  let espressoData = {
    total_espresso_count: 0,
    total_espresso_liquid_out: 0,
    total_espresso_coffee_in: 0,
    drink_stats: [],
  };
  let pourOverData = {
    total_pour_over_count: 0,
    total_pour_over_water_in: 0,
    total_pour_over_coffee_in: 0,
    drink_stats: [],
  };
  let immersionData = {
    total_immersion_count: 0,
    total_immersion_water_in: 0,
    total_immersion_coffee_in: 0,
    total_immersion_steep_time: 0,
    drink_stats: [],
  };
  let data = { 1: espressoData, 2: pourOverData, 3: immersionData };
  const normalizedData = drinks.reduce(
    (
      acc,
      {
        method_id,
        method_name,
        drink_id,
        drink_name,
        drink_count = 0,
        total_coffee_in = 0,
        total_espresso_liquid_out = 0,
        total_steep_time = 0,
        total_water_in = 0,
      }
    ) => {
      switch (method_id) {
        case 1: // Espresso
          const espressoData = acc[1];
          return {
            ...acc,
            1: {
              method: { method_id, name: method_name },
              total_espresso_count:
                parseInt(espressoData['total_espresso_count']) +
                (parseInt(drink_count) || 0),
              total_espresso_coffee_in:
                parseFloat(espressoData['total_espresso_coffee_in']) +
                (parseFloat(total_coffee_in) || 0),
              total_espresso_liquid_out:
                parseFloat(espressoData['total_espresso_liquid_out']) +
                (parseFloat(total_espresso_liquid_out) || 0),
              drink_stats: [
                ...espressoData['drink_stats'],
                {
                  drink: {
                    drink_id,
                    name: drink_name,
                    method: { method_id, name: method_name },
                  },
                  total_count: parseInt(drink_count) || 0,
                  total_coffee_in: parseFloat(total_coffee_in) || 0,
                  total_espresso_liquid_out:
                    parseFloat(total_espresso_liquid_out) || 0,
                },
              ],
            },
          };
        case 2: // Pour Over
          const pourOverData = acc[2];
          return {
            ...acc,
            2: {
              method: { method_id, name: method_name },
              total_pour_over_count:
                parseInt(pourOverData['total_pour_over_count']) +
                (parseInt(drink_count) || 0),
              total_pour_over_coffee_in:
                parseFloat(pourOverData['total_pour_over_coffee_in']) +
                (parseFloat(total_coffee_in) || 0),
              total_pour_over_water_in:
                parseFloat(pourOverData['total_pour_over_water_in']) +
                (parseFloat(total_water_in) || 0),
              drink_stats: [
                ...pourOverData['drink_stats'],
                {
                  drink: {
                    drink_id,
                    name: drink_name,
                    method: { method_id, name: method_name },
                  },
                  total_count: parseInt(drink_count) || 0,
                  total_coffee_in: parseFloat(total_coffee_in) || 0,
                  total_water_in: parseFloat(total_water_in) || 0,
                },
              ],
            },
          };
        case 3: // Immersion
          const immersionData = acc[3];
          return {
            ...acc,
            3: {
              method: { method_id, name: method_name },
              total_immersion_count:
                parseInt(immersionData['total_immersion_count']) +
                (parseInt(drink_count) || 0),
              total_immersion_coffee_in:
                parseFloat(immersionData['total_immersion_coffee_in']) +
                (parseFloat(total_coffee_in) || 0),
              total_immersion_water_in:
                parseFloat(immersionData['total_immersion_water_in']) +
                (parseFloat(total_water_in) || 0),
              total_immersion_steep_time:
                parseFloat(immersionData['total_immersion_steep_time']) +
                (parseFloat(total_steep_time) || 0),
              drink_stats: [
                ...immersionData['drink_stats'],
                {
                  drink: {
                    drink_id,
                    name: drink_name,
                    method: { method_id, name: method_name },
                  },
                  total_count: parseInt(drink_count) || 0,
                  total_coffee_in: parseFloat(total_coffee_in) || 0,
                  total_water_in: parseFloat(total_water_in) || 0,
                  total_steep_time: parseFloat(total_steep_time) || 0,
                },
              ],
            },
          };
        default:
          return acc;
      }
    },
    data
  );
  return normalizedData;
};

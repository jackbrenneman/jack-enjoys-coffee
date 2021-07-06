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
 *     drink_breakdown: [
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
  let drinkData = {
    total_count: 0,
    total_coffee_in: 0,
    total_liquid_out: 0,
    total_steep_time: 0,
    total_water_in: 0,
    drink_breakdown: [],
  };
  // A drink will contain: a name, drink_id, method_id, and count
  const normalizedDrinkData = drinks.reduce(
    (
      acc,
      {
        method_id,
        method_name,
        drink_name,
        drink_id,
        drink_count = 0,
        total_coffee_in = 0,
        total_liquid_out = 0,
        total_steep_time = 0,
        total_water_in = 0,
      }
    ) => {
      return {
        method: { method_id, name: method_name },
        total_count:
          parseInt(acc['total_count']) + (parseInt(drink_count) || 0),
        total_coffee_in:
          parseFloat(acc['total_coffee_in']) +
          (parseFloat(total_coffee_in) || 0),
        total_liquid_out:
          parseFloat(acc['total_liquid_out']) +
          (parseFloat(total_liquid_out) || 0),
        total_steep_time:
          parseFloat(acc['total_steep_time']) +
          (parseFloat(total_steep_time) || 0),
        total_water_in:
          parseFloat(acc['total_water_in']) + (parseFloat(total_water_in) || 0),
        drink_breakdown: [
          ...acc['drink_breakdown'],
          {
            drink: {
              drink_id,
              name: drink_name,
              method: { method_id, name: method_name },
            },
            total_count: parseInt(drink_count) || 0,
            total_coffee_in: parseFloat(total_coffee_in) || 0,
            total_liquid_out: parseFloat(total_liquid_out) || 0,
            total_steep_time: parseFloat(total_steep_time) || 0,
            total_water_in: parseFloat(total_water_in) || 0,
          },
        ],
      };
    },
    drinkData
  );
  return normalizedDrinkData;
};

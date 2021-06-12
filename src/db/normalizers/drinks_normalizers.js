/**
 * Normalizers for any queries regarding drinks.
 */
export const normalizeDrinks = (drinks) => {
  const normalizedDrinks = drinks.map((drink) => {
    const { drink_id, drink_name, method_id, method_name } = drink;
    return {
      drink_id,
      name: drink_name,
      method: {
        method_id,
        name: method_name,
      },
    };
  });
  return normalizedDrinks;
};

export const normalizeDrinksByUserId = (drinks) => {
  const normalizedDrinks = drinks.map((drink) => {
    const { drink_id, drink_name, method_id, method_name } = drink;
    return {
      drink_id,
      name: drink_name,
      method: {
        method_id,
        name: method_name,
      },
    };
  });
  return normalizedDrinks;
};

export const normalizeDrinkById = (drinks) => {
  const normalizedDrinks = drinks.map((drink) => {
    const { drink_id, drink_name, method_id, method_name } = drink;
    return {
      drink_id,
      name: drink_name,
      method: {
        method_id,
        name: method_name,
      },
    };
  });
  return normalizedDrinks;
};

export const normalizeDrinksByName = (drinks) => {
  const normalizedDrinks = drinks.map((drink) => {
    const { drink_id, drink_name, method_id, method_name } = drink;
    return {
      drink_id,
      name: drink_name,
      method: {
        method_id,
        name: method_name,
      },
    };
  });
  return normalizedDrinks;
};

export const normalizeDrinksByMethodId = (drinks) => {
  const normalizedDrinks = drinks.map((drink) => {
    const { drink_id, drink_name, method_id, method_name } = drink;
    return {
      drink_id,
      name: drink_name,
      method: {
        method_id,
        name: method_name,
      },
    };
  });
  return normalizedDrinks;
};

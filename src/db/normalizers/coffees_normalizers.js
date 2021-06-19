/**
 * Normalizers for any queries regarding coffees.
 */
export const normalizeCoffees = (coffees) => {
  const normalizedCoffees = coffees.map((coffee) => {
    const {
      coffee_id,
      coffee_name,
      is_active,
      roaster_id,
      roaster_name,
      roaster_city,
      roaster_state,
      roaster_country,
      roaster_website,
      origin_id,
      origin_name,
      process_id,
      process_name,
    } = coffee;
    return {
      coffee_id,
      name: coffee_name,
      is_active,
      roaster: {
        roaster_id,
        name: roaster_name,
        city: roaster_city,
        state: roaster_state,
        country: roaster_country,
        website: roaster_website,
      },
      origin: {
        origin_id,
        name: origin_name,
      },
      process: {
        process_id,
        name: process_name,
      },
    };
  });
  return normalizedCoffees;
};

export const normalizeCoffeesByUserId = (coffees) => {
  const normalizedCoffees = coffees.map((coffee) => {
    const {
      coffee_id,
      coffee_name,
      is_active,
      roaster_id,
      roaster_name,
      roaster_city,
      roaster_state,
      roaster_country,
      roaster_website,
      origin_id,
      origin_name,
      process_id,
      process_name,
    } = coffee;
    return {
      coffee_id,
      name: coffee_name,
      is_active,
      roaster: {
        roaster_id,
        name: roaster_name,
        city: roaster_city,
        state: roaster_state,
        country: roaster_country,
        website: roaster_website,
      },
      origin: {
        origin_id,
        name: origin_name,
      },
      process: {
        process_id,
        name: process_name,
      },
    };
  });
  return normalizedCoffees;
};

export const normalizeCreateCoffeeMutation = (coffee) => {
  const {
    coffee_id,
    name,
    roaster_id,
    origin_id,
    process_id,
    is_active,
  } = coffee;
  return {
    coffee_id,
    name,
    is_active,
    roaster: {
      roaster_id,
    },
    origin: {
      origin_id,
    },
    process: {
      process_id,
    },
  };
};

export const normalizeUpdateCoffeeMutation = (coffee) => {
  const {
    coffee_id,
    name,
    roaster_id,
    origin_id,
    process_id,
    is_active,
  } = coffee;
  return {
    coffee_id,
    name,
    is_active,
    roaster: {
      roaster_id,
    },
    origin: {
      origin_id,
    },
    process: {
      process_id,
    },
  };
};

export const normalizeCoffeeById = (coffees) => {
  const normalizedCoffees = coffees.map((coffee) => {
    const {
      coffee_id,
      coffee_name,
      is_active,
      roaster_id,
      roaster_name,
      roaster_city,
      roaster_state,
      roaster_country,
      roaster_website,
      origin_id,
      origin_name,
      process_id,
      process_name,
    } = coffee;
    return {
      coffee_id,
      name: coffee_name,
      is_active,
      roaster: {
        roaster_id,
        name: roaster_name,
        city: roaster_city,
        state: roaster_state,
        country: roaster_country,
        website: roaster_website,
      },
      origin: {
        origin_id,
        name: origin_name,
      },
      process: {
        process_id,
        name: process_name,
      },
    };
  });
  return normalizedCoffees;
};

export const normalizeCoffeesByName = (coffees) => {
  const normalizedCoffees = coffees.map((coffee) => {
    const {
      coffee_id,
      coffee_name,
      is_active,
      roaster_id,
      roaster_name,
      roaster_city,
      roaster_state,
      roaster_country,
      roaster_website,
      origin_id,
      origin_name,
      process_id,
      process_name,
    } = coffee;
    return {
      coffee_id,
      name: coffee_name,
      is_active,
      roaster: {
        roaster_id,
        name: roaster_name,
        city: roaster_city,
        state: roaster_state,
        country: roaster_country,
        website: roaster_website,
      },
      origin: {
        origin_id,
        name: origin_name,
      },
      process: {
        process_id,
        name: process_name,
      },
    };
  });
  return normalizedCoffees;
};

export const normalizeCoffeesByRoasterId = (coffees) => {
  const normalizedCoffees = coffees.map((coffee) => {
    const {
      coffee_id,
      coffee_name,
      is_active,
      roaster_id,
      roaster_name,
      roaster_city,
      roaster_state,
      roaster_country,
      roaster_website,
      origin_id,
      origin_name,
      process_id,
      process_name,
    } = coffee;
    return {
      coffee_id,
      name: coffee_name,
      is_active,
      roaster: {
        roaster_id,
        name: roaster_name,
        city: roaster_city,
        state: roaster_state,
        country: roaster_country,
        website: roaster_website,
      },
      origin: {
        origin_id,
        name: origin_name,
      },
      process: {
        process_id,
        name: process_name,
      },
    };
  });
  return normalizedCoffees;
};

export const normalizeCoffeesByOriginId = (coffees) => {
  const normalizedCoffees = coffees.map((coffee) => {
    const {
      coffee_id,
      coffee_name,
      is_active,
      roaster_id,
      roaster_name,
      roaster_city,
      roaster_state,
      roaster_country,
      roaster_website,
      origin_id,
      origin_name,
      process_id,
      process_name,
    } = coffee;
    return {
      coffee_id,
      name: coffee_name,
      is_active,
      roaster: {
        roaster_id,
        name: roaster_name,
        city: roaster_city,
        state: roaster_state,
        country: roaster_country,
        website: roaster_website,
      },
      origin: {
        origin_id,
        name: origin_name,
      },
      process: {
        process_id,
        name: process_name,
      },
    };
  });
  return normalizedCoffees;
};

export const normalizeCoffeesByProcessId = (coffees) => {
  const normalizedCoffees = coffees.map((coffee) => {
    const {
      coffee_id,
      coffee_name,
      is_active,
      roaster_id,
      roaster_name,
      roaster_city,
      roaster_state,
      roaster_country,
      roaster_website,
      origin_id,
      origin_name,
      process_id,
      process_name,
    } = coffee;
    return {
      coffee_id,
      name: coffee_name,
      is_active,
      roaster: {
        roaster_id,
        name: roaster_name,
        city: roaster_city,
        state: roaster_state,
        country: roaster_country,
        website: roaster_website,
      },
      origin: {
        origin_id,
        name: origin_name,
      },
      process: {
        process_id,
        name: process_name,
      },
    };
  });
  return normalizedCoffees;
};

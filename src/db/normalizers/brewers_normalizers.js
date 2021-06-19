/**
 * Normalizers for any queries regarding brewers.
 */
export const normalizeBrewers = (brewers) => {
  const normalizedBrewers = brewers.map((brewer) => {
    const {
      brewer_id,
      brewer_name,
      brewer_website,
      is_active,
      method_id,
      method_name,
    } = brewer;
    return {
      brewer_id,
      name: brewer_name,
      website: brewer_website,
      is_active,
      method: {
        method_id,
        name: method_name,
      },
    };
  });
  return normalizedBrewers;
};

export const normalizeBrewersByUserId = (brewers) => {
  const normalizedBrewers = brewers.map((brewer) => {
    const {
      brewer_id,
      brewer_name,
      brewer_website,
      is_active,
      method_id,
      method_name,
    } = brewer;
    return {
      brewer_id,
      name: brewer_name,
      website: brewer_website,
      is_active,
      method: {
        method_id,
        name: method_name,
      },
    };
  });
  return normalizedBrewers;
};

export const normalizeBrewerById = (brewers) => {
  const normalizedBrewers = brewers.map((brewer) => {
    const {
      brewer_id,
      brewer_name,
      brewer_website,
      is_active,
      method_id,
      method_name,
    } = brewer;
    return {
      brewer_id,
      name: brewer_name,
      website: brewer_website,
      is_active,
      method: {
        method_id,
        name: method_name,
      },
    };
  });
  return normalizedBrewers;
};

export const normalizeBrewersByName = (brewers) => {
  const normalizedBrewers = brewers.map((brewer) => {
    const {
      brewer_id,
      brewer_name,
      brewer_website,
      is_active,
      method_id,
      method_name,
    } = brewer;
    return {
      brewer_id,
      name: brewer_name,
      website: brewer_website,
      is_active,
      method: {
        method_id,
        name: method_name,
      },
    };
  });
  return normalizedBrewers;
};

export const normalizeBrewersByMethodId = (brewers) => {
  const normalizedBrewers = brewers.map((brewer) => {
    const {
      brewer_id,
      brewer_name,
      brewer_website,
      is_active,
      method_id,
      method_name,
    } = brewer;
    return {
      brewer_id,
      name: brewer_name,
      website: brewer_website,
      is_active,
      method: {
        method_id,
        name: method_name,
      },
    };
  });
  return normalizedBrewers;
};

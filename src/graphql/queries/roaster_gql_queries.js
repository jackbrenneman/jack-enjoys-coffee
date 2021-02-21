/**
 * All GraphQL queries regarding roasters.
 */

/**
 * Query to get all roasters from the roaster table.
 */
export const roastersQuery = `
  query {
    roasters {
      roaster_id
      name
      city
      state
      country
      website
    }
  }
`;

/**
 * Query for roaster by id.
 *
 * @param {int} roaster_id the id of the roaster to get info for
 */
export const coffeeByIdQuery = (roaster_id) => `
  query {
    roasters(roaster_id=${roaster_id}) {
      roaster_id
      name
      city
      state
      country
      website
    }
  }
`;

/**
 * Query for roasters by name.
 *
 * @param {string} name the name of the roaster the user is searching for
 */
export const roastersByNameQuery = (name) => `
  query {
    roasters(name=${name}) {
      roaster_id
      name
      city
      state
      country
      website
    }
  }
`;

/**
 * Query for roaster by city.
 *
 * @param {int} city the city of the roaster the user is searching for
 */
export const roastersByCityQuery = (city) => `
  query {
    roasters(city=${city}) {
      roaster_id
      name
      city
      state
      country
      website
    }
  }
`;

/**
 * Query for roaster by state.
 *
 * @param {int} state the state of the roaster the user is searching for
 */
export const roastersByStateQuery = (state) => `
  query {
    roasters(state=${state}) {
      roaster_id
      name
      city
      state
      country
      website
    }
  }
`;

/**
 * Query for roaster by country.
 *
 * @param {int} country the country of the roaster the user is searching for
 */
export const roastersByCountryQuery = (country) => `
  query {
    roasters(country=${country}) {
      roaster_id
      name
      city
      state
      country
      website
    }
  }
`;

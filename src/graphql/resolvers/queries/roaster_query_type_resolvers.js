/**
 * Roaster Type Resolvers. Fetches the information for roasters on a GraphQL request.
 */
import { query } from '../../../db/index.js';
import {
  selectAllRoasters,
  selectRoastersByUserId,
  selectRoasterById,
  selectRoastersByName,
  selectRoastersByCity,
  selectRoastersByState,
  selectRoastersByCountry,
} from '../../../db/queries/roasters_queries.js';
import {
  normalizeRoasters,
  normalizeRoasterById,
  normalizeRoasterByName,
  normalizeRoastersByCity,
  normalizeRoastersByState,
  normalizeRoastersByCountry,
} from '../../../db/normalizers/roasters_normalizers.js';

/**
 * Resolver for all roasters.
 */
export const roastersResolver = () => {
  return query(selectAllRoasters)
    .then((result) => {
      const data = result.rows;
      return normalizeRoasters(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for roaster by user_id.
 *
 * @param {int} user_id the user_id of the user
 */
export const roastersByUserIdResolver = (user_id) => {
  return query(selectRoastersByUserId, [user_id])
    .then((result) => {
      const data = result.rows;
      return normalizeRoasters(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for roaster by id.
 *
 * @param {int} roaster_id the roaster_id of the roaster
 */
export const roasterByIdResolver = (roaster_id) => {
  return query(selectRoasterById, [roaster_id])
    .then((result) => {
      const data = result.rows;
      return normalizeRoasterById(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for roaster by name. Retrieves all roasters that have the inputted string <name> within their full name.
 *
 * @param {string} name the name of the roaster
 */
export const roastersByNameResolver = (name) => {
  return query(selectRoastersByName, [`%${name}%`])
    .then((result) => {
      const data = result.rows;
      return normalizeRoasterByName(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for roasters by city.
 *
 * @param {string} city the city where the roaster resides
 */
export const roastersByCityResolver = (city) => {
  return query(selectRoastersByCity, [city])
    .then((result) => {
      const data = result.rows;
      return normalizeRoastersByCity(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for roasters by state.
 *
 * @param {string} state the state where the roaster resides
 */
export const roastersByStateResolver = (state) => {
  return query(selectRoastersByState, [state])
    .then((result) => {
      const data = result.rows;
      return normalizeRoastersByState(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for roasters by country.
 *
 * @param {string} country the country where the roaster resides
 */
export const roastersByCountryResolver = (country) => {
  return query(selectRoastersByCountry, [country])
    .then((result) => {
      const data = result.rows;
      return normalizeRoastersByCountry(data);
    })
    .catch((e) => console.error(e.stack));
};

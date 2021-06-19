/**
 * Coffee Type Resolvers. Fetches the information for coffees on a GraphQL request.
 */
import { query } from '../../../db/index.js';
import {
  selectAllCoffees,
  selectCoffeesByUserId,
  selectCoffeeById,
  selectCoffeesByName,
  selectCoffeesByRoasterId,
  selectCoffeesByOriginId,
  selectCoffeesByProcessId,
} from '../../../db/queries/coffees_queries.js';
import {
  normalizeCoffees,
  normalizeCoffeesByUserId,
  normalizeCoffeeById,
  normalizeCoffeesByName,
  normalizeCoffeesByRoasterId,
  normalizeCoffeesByOriginId,
  normalizeCoffeesByProcessId,
} from '../../../db/normalizers/coffees_normalizers.js';

/**
 * Resolver for all coffees.
 */
export const coffeesResolver = () => {
  return query(selectAllCoffees)
    .then((result) => {
      const data = result.rows;
      return normalizeCoffees(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for coffees by user_id.
 *
 * @param {int} user_id the coffee_id of the coffee
 */
export const coffeesByUserIdResolver = (user_id) => {
  return query(selectCoffeesByUserId, [user_id])
    .then((result) => {
      const data = result.rows;
      return normalizeCoffeesByUserId(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for coffee by id.
 *
 * @param {int} coffee_id the coffee_id of the coffee
 */
export const coffeeByIdResolver = (coffee_id) => {
  return query(selectCoffeeById, [coffee_id])
    .then((result) => {
      const data = result.rows;
      return normalizeCoffeeById(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for coffee by name. Retrieves all coffees that have the inputted string <name> within their full name.
 *
 * @param {string} name the name of the coffee
 */
export const coffeesByNameResolver = (name) => {
  return query(selectCoffeesByName, [`%${name}%`])
    .then((result) => {
      const data = result.rows;
      return normalizeCoffeesByName(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for coffees by roaster_id.
 *
 * @param {string} roaster_id the id of the roaster
 */
export const coffeesByRoasterIdResolver = (roaster_id) => {
  return query(selectCoffeesByRoasterId, [roaster_id])
    .then((result) => {
      const data = result.rows;
      return normalizeCoffeesByRoasterId(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for coffees by origin_id.
 *
 * @param {string} origin_id the id of the origin
 */
export const coffeesByOriginIdResolver = (origin_id) => {
  return query(selectCoffeesByOriginId, [origin_id])
    .then((result) => {
      const data = result.rows;
      return normalizeCoffeesByOriginId(data);
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for coffees by process_id.
 *
 * @param {string} process_id the id of the process
 */
export const coffeesByProcessIdResolver = (process_id) => {
  return query(selectCoffeesByProcessId, [process_id])
    .then((result) => {
      const data = result.rows;
      return normalizeCoffeesByProcessId(data);
    })
    .catch((e) => console.error(e.stack));
};

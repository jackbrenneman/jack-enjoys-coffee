/**
 * User Type Resolver. Fetches the information for a user on a GraphQL request.
 */
import { query } from '../../../db/index.js';
import {
  selectUserDataQuery,
  selectStartDate,
  selectTotalCoffeeEntries,
  selectTotalCoffeeIn,
  selectUniqueCoffeeCount,
  selectUniqueRoasterCount,
  selectDrinkData,
} from '../../../db/queries/users_queries.js';
import { normalizeMethodDrinkData } from '../../../db/normalizers/users_normalizers.js';

/**
 * Resolver for user by user_id.
 *
 * @param {int} user_id the user_id of the user
 */
export const userByIdResolver = (user_id) => {
  return query(selectUserDataQuery, [user_id])
    .then((result) => {
      const data = result.rows[0];
      return data;
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for start date by user_id.
 *
 * @param {int} user_id the user_id of the user
 */
export const startDateByUserIdResolver = (user_id) => {
  return query(selectStartDate, [user_id])
    .then((result) => {
      const data = result.rows[0];
      return data['start_date'];
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for total coffee entries by user_id.
 *
 * @param {int} user_id the user_id of the user
 */
export const totalCoffeeEntriesByUserIdResolver = (user_id) => {
  return query(selectTotalCoffeeEntries, [user_id])
    .then((result) => {
      const data = result.rows[0];
      return data['count'];
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for total coffee in by user_id.
 *
 * @param {int} user_id the user_id of the user
 * @returns
 */
export const totalCoffeeInByUserIdResolver = (user_id) => {
  return query(selectTotalCoffeeIn, [user_id])
    .then((result) => {
      const data = result.rows[0];
      return data['sum'];
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for total unique coffees by user_id.
 *
 * @param {int} user_id the user_id of the user
 */
export const totalUniqueCoffeesByUserIdResolver = (user_id) => {
  return query(selectUniqueCoffeeCount, [user_id])
    .then((result) => {
      const data = result.rows[0];
      return data['count'];
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for total unique roasters by user_id.
 *
 * @param {int} user_id the user_id of the user
 */
export const totalUniqueRoastersByUserIdResolver = (user_id) => {
  return query(selectUniqueRoasterCount, [user_id])
    .then((result) => {
      const data = result.rows[0];
      return data['total_unique_roasters'];
    })
    .catch((e) => console.error(e.stack));
};

/**
 * Resolver for drink data by user_id and method_id.
 *
 * @param {int} user_id   the user_id of the user
 * @param {int} method_id the method_id of the method
 */
export const drinkDataByMethodAndUserIdResolver = (user_id, method_id) => {
  return query(selectDrinkData, [user_id, method_id])
    .then((result) => {
      const data = result.rows;
      return normalizeMethodDrinkData(data);
    })
    .catch((e) => console.error(e.stack));
};

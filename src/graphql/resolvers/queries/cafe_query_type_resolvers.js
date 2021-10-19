/**
 * Cafe Type Resolvers. Fetches the information for cafes on a GraphQL request.
 */
 import { query } from '../../../db/index.js';
 import {
   selectAllCafes,
   selectCafesByUserId,
   selectActiveCafesByUserId,
   selectCafeById,
   selectCafesByName,
   selectCafesByState,
 } from '../../../db/queries/cafes_queries.js';
 import {
   normalizeCafes,
   normalizeCafesByUserId,
   normalizeCafeById,
   normalizeCafesByName,
   normalizeCafesByState,
 } from '../../../db/normalizers/cafes_normalizers.js';

 /**
  * Resolver for all cafes.
  */
 export const cafesResolver = () => {
   return query(selectAllCafes)
     .then((result) => {
       const data = result.rows;
       return normalizeCafes(data);
     })
     .catch((e) => console.error(e.stack));
 };

 /**
  * Resolver for cafes by user_id.
  *
  * @param {int} user_id the user_id of the user
  * @param {boolean} only_active whether or not to grab ones that are labled as "is_active"
  */
 export const cafesByUserIdResolver = (user_id, only_active) => {
   return query(
     only_active ? selectActiveCafesByUserId : selectCafesByUserId,
     [user_id]
   )
     .then((result) => {
       const data = result.rows;
       return normalizeCafesByUserId(data);
     })
     .catch((e) => console.error(e.stack));
 };

 /**
  * Resolver for cafe by id.
  *
  * @param {int} cafe_id the cafe_id of the coffee
  */
 export const cafeByIdResolver = (cafe_id) => {
   return query(selectCafeById, [cafe_id])
     .then((result) => {
       const data = result.rows;
       return normalizeCafeById(data);
     })
     .catch((e) => console.error(e.stack));
 };

 /**
  * Resolver for cafe by name. Retrieves all cafes that have the inputted string <name> within their full name.
  *
  * @param {string} name the name of the cafe
  */
 export const cafesByNameResolver = (name) => {
   return query(selectCafesByName, [`%${name}%`])
     .then((result) => {
       const data = result.rows;
       return normalizeCafesByName(data);
     })
     .catch((e) => console.error(e.stack));
 };

 /**
  * Resolver for cafe by state. Retrieves all cafes that are from the inputted state.
  *
  * @param {string} state the state to search for cafes
  */
  export const cafesByStateResolver = (state) => {
    return query(selectCafesByState, [state])
      .then((result) => {
        const data = result.rows;
        return normalizeCafesByState(data);
      })
      .catch((e) => console.error(e.stack));
  };

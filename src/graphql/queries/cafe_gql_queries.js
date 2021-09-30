/**
 * All GraphQL queries regarding cafes.
 */

/**
 * Query to get all cafes from the cafes table.
 */
 export const cafesQuery = `
 query {
   cafes {
     cafe_id
     name
     city
     state
     country
     website
   }
 }
`;

/**
* Query for cafe by id.
*
* @param {int} cafe_id the id of the cafe to get info for
*/
export const cafeByIdQuery = (cafe_id) => `
 query {
   cafes(cafe_id=${cafe_id}) {
     cafe_id
     name
     city
     state
     country
     website
   }
 }
`;

/**
* Query for cafes by name.
*
* @param {string} name the name of the cafe the user is searching for
*/
export const cafesByNameQuery = (name) => `
 query {
   cafes(name=${name}) {
     cafe_id
     name
     city
     state
     country
     website
   }
 }
`;

/**
* Query for cafes by city.
*
* @param {int} city the city of the cafe the user is searching for
*/
export const cafesByCityQuery = (city) => `
 query {
   cafes(city=${city}) {
     cafe_id
     name
     city
     state
     country
     website
   }
 }
`;

/**
* Query for cafes by state.
*
* @param {int} state the state of the cafe the user is searching for
*/
export const cafesByStateQuery = (state) => `
 query {
   cafes(state=${state}) {
     cafe_id
     name
     city
     state
     country
     website
   }
 }
`;

/**
* Query for cafes by country.
*
* @param {int} country the country of the cafe the user is searching for
*/
export const cafesByCountryQuery = (cafe) => `
 query {
   cafes(country=${country}) {
     cafe_id
     name
     city
     state
     country
     website
   }
 }
`;

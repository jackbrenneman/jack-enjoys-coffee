/**
 * All GraphQL mutations regarding coffees.
 */

/**
 * The mutation to write new Coffees into the coffees table.
 *
 * @param {array} coffee an array of CoffeeInput objects, with the shape:
 *   [
 *     {
 *       name: "Coffee 1 Name",
 *       origin_id: {int},
 *       process_id: {int},
 *       roaster_id: {int},
 *     },
 *     {
 *       ...
 *     },
 *     ...
 *   ]
 */
export const coffeesMutation = (coffees) => `
  mutation {
    coffees(coffees:${coffees}) {
      coffee_id
      name
      origin_id
      process_id
      roaster_id
    }
  }
`;

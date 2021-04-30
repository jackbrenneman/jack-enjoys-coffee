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
export const coffeesMutation = `
  mutation CreateCoffees($input: [CoffeeInput]) {
    coffees(coffees: $input) {
      coffee_id
      name
      process {
        process_id
        name
      }
      origin {
        origin_id
        name
      }
      roaster {
        roaster_id
        name
      }
    }
  }
`;

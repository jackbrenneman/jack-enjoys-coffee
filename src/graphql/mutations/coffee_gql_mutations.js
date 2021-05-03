/**
 * All GraphQL mutations regarding coffees.
 */

/**
 * The mutation to write a new Coffee into the coffees table.
 */
export const coffeesMutation = `
  mutation CreateCoffee($input: CoffeeInput) {
    coffee(coffee: $input) {
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

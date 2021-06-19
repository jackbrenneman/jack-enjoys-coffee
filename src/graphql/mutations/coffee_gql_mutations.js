/**
 * All GraphQL mutations regarding coffees.
 */

/**
 * The mutation to write a new Coffee into the coffees table.
 */
export const coffeeMutation = `
  mutation CreateCoffee($coffee: CoffeeInput) {
    coffee(coffee: $coffee) {
      coffee_id
      name
      process {
        process_id
      }
      origin {
        origin_id
      }
      roaster {
        roaster_id
      }
    }
  }
`;

/**
 * The mutation to edit an existing coffee from the coffees table.
 */
export const updateCoffeeMutation = `
  mutation UpdateCoffee($coffee: CoffeeInput, $coffee_id: ID!) {
    updateCoffee(coffee: $coffee, coffee_id: $coffee_id) {
      coffee_id
      name
      process {
        process_id
      }
      origin {
        origin_id
      }
      roaster {
        roaster_id
      }
    }
  }
`;

/**
 * The mutation to delete an existing coffee from the coffees table.
 */
export const deleteCoffeeMutation = `
  mutation DeleteCoffee($coffee_id: ID!) {
    deleteCoffee(coffee_id: $coffee_id)
  }
`;

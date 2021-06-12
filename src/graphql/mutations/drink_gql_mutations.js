/**
 * All GraphQL mutations regarding drinks.
 */

/**
 * The mutation to write new Drinks into the drinks table.
 */
export const drinksMutation = `
  mutation CreateDrink($input: DrinkInput) {
    drink(drink: $input) {
      drink_id
      name
    }
  }
`;

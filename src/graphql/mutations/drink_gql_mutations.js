/**
 * All GraphQL mutations regarding drinks.
 */

/**
 * The mutation to write new Drinks into the drinks table.
 */
export const drinkMutation = `
  mutation CreateDrink($drink: DrinkInput) {
    drink(drink: $drink) {
      drink_id
      name
    }
  }
`;

/**
 * The mutation to edit an existing drink from the drinks table.
 */
export const updateDrinkMutation = `
 mutation UpdateBrewer($drink: DrinkInput, $drink_id: Int!) {
   updateDrink(drink: $drink, drink_id: $drink_id) {
     drink_id
     name
   }
 }
`;

/**
 * The mutation to delete an existing drink from the drinks table.
 */
export const deleteDrinkMutation = `
 mutation DeleteDrink($drink_id: Int!) {
   deleteDrink(drink_id: $drink_id)
 }
`;

/**
 * All GraphQL mutations regarding drinks.
 */

/**
 * The mutation to write new Drinks into the drinks table.
 *
 * @param {array} drinks an array of DrinkInput objects, with the shape:
 *   [
 *     {
 *       name: "Drink 1 Name",
 *       method_id: {int}
 *     },
 *     {
 *       ...
 *     },
 *     ...
 *   ]
 */
export const drinksMutation = `
  mutation CreateDrinks ($input: [DrinkInput]) {
    drinks(drinks: $input) {
      drink_id
      name
      method_id
    }
  }
`;

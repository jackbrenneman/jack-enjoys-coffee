/**
 * All GraphQL queries regarding drinks.
 */

/**
 * Query to get all drinks from the drinks table.
 */
export const drinksQuery = `
  query {
    drinks {
      drink_id
      name
      method_id
    }
  }
`;

/**
 * Query for drink by id.
 *
 * @param {int} drink_id the id of the drink to get info for
 */
export const drinksByIdQuery = (drink_id) => `
  query {
    drinks(drink_id:${drink_id}) {
      drink_id
      name
      method_id
    }
  }
`;

/**
 * Query for drinks by name.
 *
 * @param {string} name the name of the drink the user is searching for
 */
export const drinksByNameQuery = (name) => `
  query {
    drink(name:${name}) {
      drink_id
      name
      method_id
    }
  }
`;

/**
 * Query for drinks by method_id.
 *
 * @param {string} method_id the method_id of the drink the user is searching for
 */
export const drinksByMethodIdQuery = (method_id) => `
  query {
    drink(method_id:${method_id}) {
      drink_id
      name
      method_id
    }
  }
`;

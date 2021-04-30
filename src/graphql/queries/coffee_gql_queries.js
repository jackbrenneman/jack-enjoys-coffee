/**
 * All GraphQL queries regarding coffees.
 */

/**
 * Query to get all coffees from the coffee table.
 */
export const coffeesQuery = `
  query {
    coffees {
      coffee_id
      name
      process_id
      origin_id
      roaster_id
    }
  }
`;

/**
 * Query for coffee by id.
 *
 * @param {int} coffee_id the id of the coffee to get info for
 */
export const coffeeByIdQuery = (coffee_id) => `
  query {
    coffees(coffee_id:${coffee_id}) {
      coffee_id
      name
      origin_id
      process_id
      roaster_id
    }
  }
`;

/**
 * Query for coffees by name.
 *
 * @param {string} name the name of the coffee the user is searching for
 */
export const watersByNameQuery = (name) => `
  query {
    coffees(name:${name}) {
      coffee_id
      name
      origin_id
      process_id
      roaster_id
    }
  }
`;

/**
 * Query for coffee by origin_id.
 *
 * @param {int} origin_id the id of the origin to get coffees for
 */
export const coffeesByOriginIdQuery = (origin_id) => `
  query {
    coffees(origin_id:${origin_id}) {
      coffee_id
      name
      origin_id
      process_id
      roaster_id
    }
  }
`;

/**
 * Query for coffee by process_id.
 *
 * @param {int} process_id the id of the process to get coffees for
 */
export const coffeesByProcessIdQuery = (process_id) => `
  query {
    coffees(process_id:${process_id}) {
      coffee_id
      name
      origin_id
      process_id
      roaster_id
    }
  }
`;

/**
 * Query for coffee by roaster_id.
 *
 * @param {int} roaster_id the id of the roaster to get coffees for
 */
export const coffeesByRoasterIdQuery = (roaster_id) => `
  query {
    coffees(roaster_id:${roaster_id}) {
      coffee_id
      name
      origin_id
      process_id
      roaster_id
    }
  }
`;

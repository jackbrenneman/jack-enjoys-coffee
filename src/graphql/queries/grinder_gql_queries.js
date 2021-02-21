/**
 * All GraphQL queries regarding grinders.
 */

/**
 * Query to get all grinders from the grinder table.
 */
export const grindersQuery = `
  query {
    grinders {
      grinder_id
      name
      website
    }
  }
`;

/**
 * Query for grinder by id.
 *
 * @param {int} grinder_id the id of the grinder to get info for
 */
export const grinderByIdQuery = (grinder_id) => `
  query {
    grinders(grinder_id=${grinder_id}) {
      grinder_id
      name
      website
    }
  }
`;

/**
 * Query for grinders by name.
 *
 * @param {string} name the name of the grinder the user is searching for
 */
export const grindersByNameQuery = (name) => `
  query {
    grinders(name=${name}) {
      grinder_id
      name
      website
    }
  }
`;

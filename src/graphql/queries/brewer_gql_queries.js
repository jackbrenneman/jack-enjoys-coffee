/**
 * All GraphQL queries regarding brewers.
 */

/**
 * Query to get all brewers from the brewers table.
 */
export const brewersQuery = `
  query {
    brewers {
      brewer_id
      name
      website
    }
  }
`;

/**
 * Query for brewer by id.
 *
 * @param {int} brewer_id the id of the brewer to get info for
 */
export const brewersByIdQuery = (brewer_id) => `
  query {
    brewers(brewer_id=${brewer_id}) {
      brewer_id
      name
      website
    }
  }
`;

/**
 * Query for brewers by name.
 *
 * @param {string} name the name of the brewer the user is searching for
 */
export const brewersByNameQuery = (name) => `
  query {
    brewer(name=${name}) {
      brewer_id
      name
      website
    }
  }
`;

/**
 * All GraphQL queries regarding origins.
 */

/**
 * Query to get all origins from the origins table.
 */
export const originsQuery = `
  query {
    origins {
      origin_id
      name
    }
  }
`;

/**
 * Query for origin by id.
 *
 * @param {int} origin_id the id of the origin to get info for
 */
export const originsByIdQuery = (origin_id) => `
  query {
    origins(origin_id:${origin_id}) {
      origin_id
      name
    }
  }
`;

/**
 * Query for origins by name.
 *
 * @param {string} name the name of the origin the user is searching for
 */
export const originsByNameQuery = (name) => `
  query {
    origin(name:${name}) {
      origin_id
      name
    }
  }
`;

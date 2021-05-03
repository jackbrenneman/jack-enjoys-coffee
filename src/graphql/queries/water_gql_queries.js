/**
 * All GraphQL queries regarding waters.
 */

/**
 * Query to get all waters from the water table.
 */
export const watersQuery = `
  query {
    brewers {
      water_id
      name
      description
    }
  }
`;

/**
 * Query for water by id.
 *
 * @param {int} water_id the id of the water to get info for
 */
export const waterByIdQuery = (water_id) => `
  query {
    waters(water_id:${water_id}) {
      water_id
      name
      description
    }
  }
`;

/**
 * Query for waters by name.
 *
 * @param {string} name the name of the water the user is searching for
 */
export const watersByNameQuery = (name) => `
  query {
    waters(name:${name}) {
      water_id
      name
      description
    }
  }
`;

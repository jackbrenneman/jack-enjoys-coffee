/**
 * All GraphQL queries regarding methods.
 */

/**
 * Query to get all methods from the methods table.
 */
export const methodsQuery = `
  query {
    methods {
      method_id
      name
    }
  }
`;

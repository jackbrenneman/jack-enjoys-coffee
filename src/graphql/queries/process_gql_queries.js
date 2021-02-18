/**
 * All GraphQL queries regarding processes.
 */

export const processesQuery = `
  query {
    processes {
      process_id,
      name
    }
  }
`;

/**
 * All GraphQL queries regarding grinders.
 */

/**
 * The mutation to write a new Grinder into the grinders table.
 */
export const grindersMutation = `
  mutation CreateGrinder($input: GrinderInput) {
    grinder(grinder: $input) {
      grinder_id
      name
      website
    }
  }
`;

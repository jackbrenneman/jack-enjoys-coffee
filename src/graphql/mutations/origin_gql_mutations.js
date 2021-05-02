/**
 * All GraphQL mutations regarding origins.
 */

/**
 * The mutation to write a new Origin into the origins table.
 */
export const originsMutation = `
  mutation CreateOrigins($input: String) {
    origins(name: $input) {
      origin_id
      name
    }
  }
`;

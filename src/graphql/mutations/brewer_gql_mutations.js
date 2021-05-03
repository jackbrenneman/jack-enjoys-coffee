/**
 * All GraphQL mutations regarding brewers.
 */

/**
 * The mutation to write a new Brewer into the brewers table.
 */
export const brewersMutation = `
  mutation CreateBrewer($input: BrewerInput) {
    brewer(brewer: $input) {
      brewer_id
      name
      website
    }
  }
`;

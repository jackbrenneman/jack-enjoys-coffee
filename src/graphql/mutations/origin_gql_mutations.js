/**
 * All GraphQL mutations regarding origins.
 */

/**
 * The mutation to write new Origins into the origins table.
 *
 * @param {array} origins an array of origin names, with the shape:
 *   [
 *     "origin name 1",
 *     "origin name 2",
 *     ...
 *   ]
 */
export const originsMutation = `
  mutation CreateOrigin($input: [String]) {
    origins(names: $input) {
      origin_id
      name
    }
  }
`;

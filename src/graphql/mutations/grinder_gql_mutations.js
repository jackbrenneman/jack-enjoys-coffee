/**
 * All GraphQL queries regarding grinders.
 */

/**
 * The mutation to write new Grinders into the grinders table.
 *
 * @param {array} grinder an array of GrinderInput objects, with the shape:
 *   [
 *     {
 *       name: "Grinder 1 Name",
 *       website: "grinder1.com"
 *     },
 *     {
 *       ...
 *     },
 *     ...
 *   ]
 */
export const grindersMutation = `
  mutation CreateGrinders($input: [GrinderInput]) {
    grinders(grinders: $input) {
      grinder_id
      name
      website
    }
  }
`;

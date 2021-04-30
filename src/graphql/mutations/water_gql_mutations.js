/**
 * All GraphQL mutations regarding waters.
 */

/**
 * The mutation to write new Waters into the waters table.
 *
 * @param {array} waters an array of WaterInput objects, with the shape:
 *   [
 *     {
 *       name: "Water 1 Name",
 *       description: "Water 1 Description"
 *     },
 *     {
 *       ...
 *     },
 *     ...
 *   ]
 */
export const watersMutation = `
  mutation CreateWaters($input: [WaterInput]) {
    waters(waters: $input) {
      water_id
      name
    }
  }
`;

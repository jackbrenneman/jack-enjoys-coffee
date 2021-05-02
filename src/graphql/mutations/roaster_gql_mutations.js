/**
 * All GraphQL mutations regarding roasters.
 */

/**
 * The mutation to write new Roasters into the roasters table.
 *
 * @param {array} roasters an array of RoasterInput objects, with the shape:
 *   [
 *     {
 *       name: "Roaster 1 Name",
 *       city: "Roaster City",
 *       state: "Roaster State",
 *       country: "Roaster Country",
 *       website: "roaster1.com"
 *     },
 *     {
 *       ...
 *     },
 *     ...
 *   ]
 */
export const roastersMutation = `
mutation CreateRoaster($input: RoasterInput) {
  roasters(roaster: $input) {
    roaster_id
    name
    city
    state
    country
    website
  }
}
`;

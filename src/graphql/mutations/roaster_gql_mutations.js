/**
 * All GraphQL mutations regarding roasters.
 */

/**
 * The mutation to write a new Roaster into the roasters table.
 */
export const roastersMutation = `
mutation CreateRoaster($input: RoasterInput) {
  roaster(roaster: $input) {
    roaster_id
    name
    city
    state
    country
    website
  }
}
`;

/**
 * All GraphQL mutations regarding roasters.
 */

/**
 * The mutation to write a new Roaster into the roasters table.
 */
export const roasterMutation = `
mutation CreateRoaster($roaster: RoasterInput) {
  roaster(roaster: $roaster) {
    roaster_id
    name
    city
    state
    country
    website
    is_active
  }
}
`;

/**
 * The mutation to edit an existing roaster from the roasters table.
 */
export const updateRoasterMutation = `
 mutation UpdateRoaster($roaster: RoasterInput, $roaster_id: ID!) {
   updateRoaster(roaster: $roaster, roaster_id: $roaster_id) {
     roaster_id
     name
     city
     state
     country
     website
     is_active
   }
 }
`;

/**
 * The mutation to delete an existing roaster from the roasters table.
 */
export const deleteRoasterMutation = `
 mutation DeleteRoaster($roaster_id: ID!) {
   deleteRoaster(roaster_id: $roaster_id)
 }
`;

/**
 * All GraphQL mutations regarding waters.
 */

/**
 * The mutation to write a new Water into the waters table.
 */
export const waterMutation = `
  mutation CreateWater($water: WaterInput) {
    water(water: $water) {
      water_id
      name
      description
      is_active
    }
  }
`;

/**
 * The mutation to edit an existing water from the waters table.
 */
export const updateWaterMutation = `
 mutation UpdateWater($water: WaterInput, $water_id: Int!) {
   updateWater(water: $water, water_id: $water_id) {
     water_id
     name
     description
     is_active
   }
 }
`;

/**
 * The mutation to delete an existing water from the waters table.
 */
export const deleteWaterMutation = `
 mutation DeleteWater($water_id: Int!) {
   deleteWater(water_id: $water_id)
 }
`;

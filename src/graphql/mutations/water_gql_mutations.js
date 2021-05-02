/**
 * All GraphQL mutations regarding waters.
 */

/**
 * The mutation to write a new Water into the waters table.
 */
export const watersMutation = `
  mutation CreateWater($input: WaterInput) {
    water(water: $input) {
      water_id
      name
      description
    }
  }
`;

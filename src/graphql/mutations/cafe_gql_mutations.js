/**
 * All GraphQL mutations regarding cafes.
 */

/**
 * The mutation to write a new Cafe into the cafes table.
 */
export const cafeMutation = `
 mutation CreateCafe($cafe: CafeInput) {
   cafe(cafe: $cafe) {
     cafe_id
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
 * The mutation to edit an existing cafe from the cafes table.
 */
export const updateCafeMutation = `
  mutation UpdateCafe($cafe: CafeInput, $cafe_id: Int!) {
    updateCafe(cafe: $cafe, cafe_id: $cafe_id) {
      cafe_id
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
 * The mutation to delete an existing cafe from the cafes table.
 */
export const deleteCafeMutation = `
  mutation DeleteCafe($cafe_id: Int!) {
    deleteCafe(cafe_id: $cafe_id)
  }
 `;

/**
 * All GraphQL mutations regarding brewers.
 */

/**
 * The mutation to write a new Brewer into the brewers table.
 */
export const brewerMutation = `
  mutation CreateBrewer($brewer: BrewerInput) {
    brewer(brewer: $brewer) {
      brewer_id
      name
      website
      is_active
    }
  }
`;

/**
 * The mutation to edit an existing brewer from the brewers table.
 */
export const updateBrewerMutation = `
 mutation UpdateBrewer($brewer: BrewerInput, $brewer_id: ID!) {
   updateBrewer(brewer: $brewer, brewer_id: $brewer_id) {
     brewer_id
     name
     website
     is_active
   }
 }
`;

/**
 * The mutation to delete an existing brewer from the brewers table.
 */
export const deleteBrewerMutation = `
 mutation DeleteBrewer($brewer_id: ID!) {
   deleteBrewer(brewer_id: $brewer_id)
 }
`;

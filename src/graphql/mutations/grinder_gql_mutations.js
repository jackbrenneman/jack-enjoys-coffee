/**
 * All GraphQL queries regarding grinders.
 */

/**
 * The mutation to write a new Grinder into the grinders table.
 */
export const grinderMutation = `
  mutation CreateGrinder($grinder: GrinderInput) {
    grinder(grinder: $grinder) {
      grinder_id
      name
      website
      is_active
    }
  }
`;

/**
 * The mutation to edit an existing grinder from the grinders table.
 */
export const updateGrinderMutation = `
 mutation UpdateGrinder($grinder: GrinderInput, $grinder_id: ID!) {
   updateGrinder(grinder: $grinder, grinder_id: $grinder_id) {
     grinder_id
     name
     website
     is_active
   }
 }
`;

/**
 * The mutation to delete an existing grinder from the grinders table.
 */
export const deleteGrinderMutation = `
 mutation DeleteGrinder($grinder_id: ID!) {
   deleteGrinder(grinder_id: $grinder_id)
 }
`;

/**
 * All GraphQL mutations regarding origins.
 */

/**
 * The mutation to write a new Origin into the origins table.
 */
export const originMutation = `
  mutation CreateOrigin($originName: String) {
    origin(name: $originName) {
      origin_id
      name
    }
  }
`;

/**
 * The mutation to edit an existing origin from the origins table.
 */
export const updateOriginMutation = `
 mutation UpdateOrigin($name: String!, $origin_id: ID!) {
   updateOrigin(name: $name, origin_id: $origin_id) {
     origin_id
     name
   }
 }
`;

/**
 * The mutation to delete an existing origin from the origins table.
 */
export const deleteOriginMutation = `
 mutation DeleteOrigin($origin_id: ID!) {
   deleteOrigin(origin_id: $origin_id)
 }
`;

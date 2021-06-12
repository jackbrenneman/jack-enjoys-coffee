/**
 * Centralized validation functions for determining if the user has correct authorization and/or authentication.
 */

/**
 * Get UserId from GraphQL Context
 * @param {int} context GraphQL Context
 * @returns {int|boolean} the user_id if there, false otherwise
 */
export const getUserId = (context) => {
  return context?.user?.user_id ? context?.user?.user_id : false;
};

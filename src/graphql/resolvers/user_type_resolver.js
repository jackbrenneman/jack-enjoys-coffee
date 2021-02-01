/**
 * User Type Resolver. Fetches the information for a user on a GraphQL request.
 */
import { userData } from '../../temp_db.js';

export const userTypeResolver = (id) => {
  return userData[id];
};

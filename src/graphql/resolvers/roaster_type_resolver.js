/**
 * Roaster Type Resolver. Fetches the information for roasters on a GraphQL request.
 */
import { roasterData } from '../../temp_db.js';

export const roasterTypeResolver = (id) => {
  return id ? [roasterData[id]] : Object.values(roasterData);
};

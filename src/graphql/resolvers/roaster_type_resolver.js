/**
 * Roaster Type Resolver. Fetches the information for roasters on a GraphQL request.
 */
import { roasterData } from '../../temp_db.js';

export const roasterTypeResolver = (id) => {
  console.log('hello');
  return id ? [roasterData[id]] : Object.values(roasterData);
};

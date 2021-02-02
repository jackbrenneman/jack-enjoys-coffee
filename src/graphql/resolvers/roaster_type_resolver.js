/**
 * Roaster Type Resolver. Fetches the information for roasters on a GraphQL request.
 */
import { roasterData } from '../../temp_db.js';
import { Roaster } from '../../models/roaster.js';

export const roasterTypeResolver = (id) => {
  console.log('hello');
  const roasters = Roaster.find({}, (docs) => {
    console.log('ayy', docs);
  }).then((docs) => {
    console.log('then', docs);
  });
  return id ? [roasterData[id]] : Object.values(roasterData);
};

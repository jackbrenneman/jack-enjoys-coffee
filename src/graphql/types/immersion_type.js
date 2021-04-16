/**
 * The Immersion Method Type. Contains all information on the Immersion brewing method.
 */
import { GraphQLObjectType, GraphQLFloat } from 'graphql';
import { MethodCategoryEnum } from '../enums/method_category_enum.js';
import { MethodInterface } from '../interfaces/method_interface.js';
import { BrewerType } from './brewer_type.js';
import { DrinkType } from './drink_type.js';

export const ImmersionType = new GraphQLObjectType({
  name: 'Immersion',
  description: 'Contains all the info related to an immersion brew',
  interfaces: () => [MethodInterface],
  fields: {
    category: { type: MethodCategoryEnum },
    brewer: { type: BrewerType },
    drink: { type: DrinkType },
    coffee_in: { type: GraphQLFloat },
    water_in: { type: GraphQLFloat },
    steep_time: { type: GraphQLFloat },
  },
});

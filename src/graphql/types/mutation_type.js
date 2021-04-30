/**
 * The top level Mutation Type for the jack-enjoys-coffee app.
 */
import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
// Types
import { BrewerType } from './brewer_type.js';
import { CoffeeType } from './coffee_type.js';
import { DrinkType } from './drink_type.js';
import { GrinderType } from './grinder_type.js';
import { OriginType } from './origin_type.js';
import { RoasterType } from './roaster_type.js';
import { WaterType } from './water_type.js';
// Input Types
import { BrewerInputType } from './inputs/brewer_input_type.js';
import { CoffeeInputType } from './inputs/coffee_input_type.js';
import { DrinkInputType } from './inputs/drink_input_type.js';
import { GrinderInputType } from './inputs/grinder_input_type.js';
import { RoasterInputType } from './inputs/roaster_input_type.js';
import { WaterInputType } from './inputs/water_input_type.js';
// Resolvers
import { brewersMutationResolver } from '../resolvers/brewers/brewer_mutation_type_resolvers.js';
import { coffeesMutationResolver } from '../resolvers/coffees/coffee_mutation_type_resolvers.js';
import { drinksMutationResolver } from '../resolvers/drinks/drink_mutation_type_resolvers.js';
import { grindersMutationResolver } from '../resolvers/grinders/grinder_mutation_type_resolvers.js';
import { originsMutationResolver } from '../resolvers/origins/origin_mutation_type_resolvers.js';
import { roastersMutationResolver } from '../resolvers/roasters/roaster_mutation_type_resolvers.js';
import { watersMutationResolver } from '../resolvers/waters/water_mutation_type_resolvers.js';

const JackEnjoysCoffeeMutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    brewers: {
      type: BrewerType,
      args: {
        brewers: { type: GraphQLList(BrewerInputType) },
      },
      resolve(parentValue, { brewers }) {
        return brewersMutationResolver(brewers);
      },
    },
    coffees: {
      type: CoffeeType,
      args: {
        coffees: { type: GraphQLList(CoffeeInputType) },
      },
      resolve(parentValue, { coffees }) {
        console.log(coffees);
        return coffeesMutationResolver(coffees);
      },
    },
    drinks: {
      type: DrinkType,
      args: {
        drinks: { type: GraphQLList(DrinkInputType) },
      },
      resolve(parentValue, { drinks }) {
        return drinksMutationResolver(drinks);
      },
    },
    grinders: {
      type: GrinderType,
      args: {
        grinders: { type: GraphQLList(GrinderInputType) },
      },
      resolve(parentValue, { grinders }) {
        return grindersMutationResolver(grinders);
      },
    },
    origins: {
      type: OriginType,
      args: {
        names: { type: GraphQLList(GraphQLString) },
      },
      resolve(parentValue, { names }) {
        return originsMutationResolver(names);
      },
    },
    roasters: {
      type: RoasterType,
      args: {
        roasters: { type: GraphQLList(RoasterInputType) },
      },
      resolve(parentValue, { roasters }) {
        return roastersMutationResolver(roasters);
      },
    },
    waters: {
      type: WaterType,
      args: {
        waters: { type: GraphQLList(WaterInputType) },
      },
      resolve(parentValue, { waters }) {
        return watersMutationResolver(waters);
      },
    },
  },
});

export default JackEnjoysCoffeeMutationType;

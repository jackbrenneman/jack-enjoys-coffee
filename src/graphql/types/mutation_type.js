/**
 * The top level Mutation Type for the jack-enjoys-coffee app.
 */
import { GraphQLObjectType, GraphQLString } from 'graphql';
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
import { CoffeeEntryInputType } from './inputs/coffee_entry_input_type.js';
import { DrinkInputType } from './inputs/drink_input_type.js';
import { GrinderInputType } from './inputs/grinder_input_type.js';
import { RoasterInputType } from './inputs/roaster_input_type.js';
import { WaterInputType } from './inputs/water_input_type.js';
// Resolvers
import { brewersMutationResolver } from '../resolvers/brewers/brewer_mutation_type_resolvers.js';
import { coffeesMutationResolver } from '../resolvers/coffees/coffee_mutation_type_resolvers.js';
import { coffeeEntriesMutationResolver } from '../resolvers/coffee_entries/coffee_entry_mutation_type_resolvers.js';
import { drinksMutationResolver } from '../resolvers/drinks/drink_mutation_type_resolvers.js';
import { grindersMutationResolver } from '../resolvers/grinders/grinder_mutation_type_resolvers.js';
import { originsMutationResolver } from '../resolvers/origins/origin_mutation_type_resolvers.js';
import { roastersMutationResolver } from '../resolvers/roasters/roaster_mutation_type_resolvers.js';
import { watersMutationResolver } from '../resolvers/waters/water_mutation_type_resolvers.js';
import { CoffeeEntryType } from './coffee_entry_type.js';

const JackEnjoysCoffeeMutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    coffeeEntry: {
      type: CoffeeEntryType,
      args: {
        coffeeEntry: { type: CoffeeEntryInputType },
      },
      resolve(parentValue, { coffeeEntry }) {
        return coffeeEntriesMutationResolver(coffeeEntry);
      },
    },
    brewer: {
      type: BrewerType,
      args: {
        brewer: { type: BrewerInputType },
      },
      resolve(parentValue, { brewer }) {
        return brewersMutationResolver(brewer);
      },
    },
    coffee: {
      type: CoffeeType,
      args: {
        coffee: { type: CoffeeInputType },
      },
      resolve(parentValue, { coffee }) {
        return coffeesMutationResolver(coffee);
      },
    },
    drink: {
      type: DrinkType,
      args: {
        drink: { type: DrinkInputType },
      },
      resolve(parentValue, { drink }) {
        return drinksMutationResolver(drink);
      },
    },
    grinder: {
      type: GrinderType,
      args: {
        grinder: { type: GrinderInputType },
      },
      resolve(parentValue, { grinder }) {
        return grindersMutationResolver(grinder);
      },
    },
    origin: {
      type: OriginType,
      args: {
        name: { type: GraphQLString },
      },
      resolve(parentValue, { name }) {
        return originsMutationResolver(name);
      },
    },
    roaster: {
      type: RoasterType,
      args: {
        roaster: { type: RoasterInputType },
      },
      resolve(parentValue, { roaster }) {
        return roastersMutationResolver(roaster);
      },
    },
    water: {
      type: WaterType,
      args: {
        water: { type: WaterInputType },
      },
      resolve(parentValue, { water }) {
        return watersMutationResolver(water);
      },
    },
  },
});

export default JackEnjoysCoffeeMutationType;

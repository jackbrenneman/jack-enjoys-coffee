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
import { SigninInputType } from './inputs/signin_input_type.js';
import { SignupInputType } from './inputs/signup_input_type.js';
import { AuthType } from './auth_type.js';
import { signupMutationResolver } from '../resolvers/signup/signup_mutation_type_resolvers.js';
import { signinMutationResolver } from '../resolvers/signin/signin_mutation_type_resolver.js';
// Validation
import { getUserId } from '../validate/validate.js';

const JackEnjoysCoffeeMutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: AuthType,
      args: {
        signup: { type: SignupInputType },
      },
      resolve(parentValue, { signup }) {
        return signupMutationResolver(signup);
      },
    },
    signin: {
      type: AuthType,
      args: {
        signin: { type: SigninInputType },
      },
      resolve(parentValue, { signin }) {
        return signinMutationResolver(signin);
      },
    },
    coffeeEntry: {
      type: CoffeeEntryType,
      args: {
        coffeeEntry: { type: CoffeeEntryInputType },
      },
      resolve(parentValue, { coffeeEntry }, context) {
        const user_id = getUserId(context);
        // If there's a user_id, then the user is logged in. Add in the entry for that user.
        if (user_id) {
          return coffeeEntriesMutationResolver(coffeeEntry, user_id);
        }
        throw new Error('401: Unauthorized');
      },
    },
    brewer: {
      type: BrewerType,
      args: {
        brewer: { type: BrewerInputType },
      },
      resolve(parentValue, { brewer }, context) {
        const user_id = getUserId(context);
        if (user_id) {
          return brewersMutationResolver(brewer, user_id);
        }
        throw new Error('401: Unauthorized');
      },
    },
    coffee: {
      type: CoffeeType,
      args: {
        coffee: { type: CoffeeInputType },
      },
      resolve(parentValue, { coffee }, context) {
        const user_id = getUserId(context);
        if (user_id) {
          return coffeesMutationResolver(coffee, user_id);
        }
        throw new Error('401: Unauthorized');
      },
    },
    drink: {
      type: DrinkType,
      args: {
        drink: { type: DrinkInputType },
      },
      resolve(parentValue, { drink }, context) {
        const user_id = getUserId(context);
        if (user_id) {
          return drinksMutationResolver(drink, user_id);
        }
        throw new Error('401: Unauthorized');
      },
    },
    grinder: {
      type: GrinderType,
      args: {
        grinder: { type: GrinderInputType },
      },
      resolve(parentValue, { grinder }, context) {
        const user_id = getUserId(context);
        if (user_id) {
          return grindersMutationResolver(grinder, user_id);
        }
        throw new Error('401: Unauthorized');
      },
    },
    origin: {
      type: OriginType,
      args: {
        name: { type: GraphQLString },
      },
      resolve(parentValue, { name }, context) {
        const user_id = getUserId(context);
        if (user_id) {
          return originsMutationResolver(name, user_id);
        }
        throw new Error('401: Unauthorized');
      },
    },
    roaster: {
      type: RoasterType,
      args: {
        roaster: { type: RoasterInputType },
      },
      resolve(parentValue, { roaster }, context) {
        const user_id = getUserId(context);
        if (user_id) {
          return roastersMutationResolver(roaster, user_id);
        }
        throw new Error('401: Unauthorized');
      },
    },
    water: {
      type: WaterType,
      args: {
        water: { type: WaterInputType },
      },
      resolve(parentValue, { water }, context) {
        const user_id = getUserId(context);
        if (user_id) {
          return watersMutationResolver(water, user_id);
        }
        throw new Error('401: Unauthorized');
      },
    },
  },
});

export default JackEnjoysCoffeeMutationType;

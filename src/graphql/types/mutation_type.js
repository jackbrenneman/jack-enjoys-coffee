/**
 * The top level Mutation Type for the jack-enjoys-coffee app.
 */
import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
// Types
import { AuthType } from './auth_type.js';
import { BrewerType } from './brewer_type.js';
import { CoffeeEntryType } from './coffee_entry_type.js';
import { CoffeeType } from './coffee_type.js';
import { DrinkType } from './drink_type.js';
import { GrinderType } from './grinder_type.js';
import { OriginType } from './origin_type.js';
import { RoasterType } from './roaster_type.js';
import { WaterType } from './water_type.js';
// Input Types
import { BrewerInputType } from './inputs/brewer_input_type.js';
import { CoffeeEntryInputType } from './inputs/coffee_entry_input_type.js';
import { CoffeeInputType } from './inputs/coffee_input_type.js';
import { DrinkInputType } from './inputs/drink_input_type.js';
import { GrinderInputType } from './inputs/grinder_input_type.js';
import { RoasterInputType } from './inputs/roaster_input_type.js';
import { WaterInputType } from './inputs/water_input_type.js';
import { SigninInputType } from './inputs/signin_input_type.js';
import { SignupInputType } from './inputs/signup_input_type.js';
// Resolvers
import {
  createBrewerMutationResolver,
  deleteBrewerMutationResolver,
  updateBrewerMutationResolver,
} from '../resolvers/mutations/brewer_mutation_type_resolvers.js';
import {
  createCoffeeEntryMutationResolver,
  deleteCoffeeEntryMutationResolver,
  updateCoffeeEntryMutationResolver,
} from '../resolvers/mutations/coffee_entry_mutation_type_resolvers.js';
import {
  createCoffeeMutationResolver,
  deleteCoffeeMutationResolver,
  updateCoffeeMutationResolver,
} from '../resolvers/mutations/coffee_mutation_type_resolvers.js';
import {
  createDrinkMutationResolver,
  deleteDrinkMutationResolver,
  updateDrinkMutationResolver,
} from '../resolvers/mutations/drink_mutation_type_resolvers.js';
import {
  createGrinderMutationResolver,
  deleteGrinderMutationResolver,
  updateGrinderMutationResolver,
} from '../resolvers/mutations/grinder_mutation_type_resolvers.js';
import {
  createOriginMutationResolver,
  deleteOriginMutationResolver,
  updateOriginMutationResolver,
} from '../resolvers/mutations/origin_mutation_type_resolvers.js';
import {
  createRoasterMutationResolver,
  deleteRoasterMutationResolver,
  updateRoasterMutationResolver,
} from '../resolvers/mutations/roaster_mutation_type_resolvers.js';
import {
  createWaterMutationResolver,
  deleteWaterMutationResolver,
  updateWaterMutationResolver,
} from '../resolvers/mutations/water_mutation_type_resolvers.js';
import { signupMutationResolver } from '../resolvers/mutations/signup_mutation_type_resolvers.js';
import { signinMutationResolver } from '../resolvers/mutations/signin_mutation_type_resolver.js';
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
          return createCoffeeEntryMutationResolver(coffeeEntry, user_id);
        }
        throw new Error('401: Unauthorized');
      },
    },
    deleteCoffeeEntry: {
      type: GraphQLInt,
      args: {
        coffee_entry_id: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parentValue, { coffee_entry_id }, context) {
        if (!coffee_entry_id) {
          throw new Error('coffee_entry_id is required');
        }
        const user_id = getUserId(context);
        if (user_id) {
          return deleteCoffeeEntryMutationResolver(coffee_entry_id, user_id)
            ? coffee_entry_id
            : 0;
        }
        throw new Error('401: Unauthorized');
      },
    },
    updateCoffeeEntry: {
      type: CoffeeEntryType,
      args: {
        coffee_entry_id: { type: new GraphQLNonNull(GraphQLInt) },
        coffee_entry: { type: CoffeeEntryInputType },
      },
      resolve(parentValue, { coffee_entry_id, coffee_entry }, context) {
        const user_id = getUserId(context);
        if (user_id) {
          return updateCoffeeEntryMutationResolver(
            coffee_entry,
            coffee_entry_id,
            user_id
          );
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
          return createBrewerMutationResolver(brewer, user_id);
        }
        throw new Error('401: Unauthorized');
      },
    },
    deleteBrewer: {
      type: GraphQLInt,
      args: {
        brewer_id: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parentValue, { brewer_id }, context) {
        const user_id = getUserId(context);
        if (user_id) {
          return deleteBrewerMutationResolver(brewer_id, user_id)
            ? brewer_id
            : 0;
        }
        throw new Error('401: Unauthorized');
      },
    },
    updateBrewer: {
      type: BrewerType,
      args: {
        brewer_id: { type: new GraphQLNonNull(GraphQLInt) },
        brewer: { type: BrewerInputType },
      },
      resolve(parentValue, { brewer_id, brewer }, context) {
        const user_id = getUserId(context);
        if (user_id) {
          return updateBrewerMutationResolver(brewer, brewer_id, user_id);
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
          return createCoffeeMutationResolver(coffee, user_id);
        }
        throw new Error('401: Unauthorized');
      },
    },
    deleteCoffee: {
      type: GraphQLInt,
      args: {
        coffee_id: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parentValue, { coffee_id }, context) {
        const user_id = getUserId(context);
        if (user_id) {
          return deleteCoffeeMutationResolver(coffee_id, user_id)
            ? coffee_id
            : 0;
        }
        throw new Error('401: Unauthorized');
      },
    },
    updateCoffee: {
      type: CoffeeType,
      args: {
        coffee_id: { type: new GraphQLNonNull(GraphQLInt) },
        coffee: { type: CoffeeInputType },
      },
      resolve(parentValue, { coffee_id, coffee }, context) {
        const user_id = getUserId(context);
        if (user_id) {
          return updateCoffeeMutationResolver(coffee, coffee_id, user_id);
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
          return createDrinkMutationResolver(drink, user_id);
        }
        throw new Error('401: Unauthorized');
      },
    },
    deleteDrink: {
      type: GraphQLInt,
      args: {
        drink_id: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parentValue, { drink_id }, context) {
        const user_id = getUserId(context);
        if (user_id) {
          return deleteDrinkMutationResolver(drink_id, user_id) ? drink_id : 0;
        }
        throw new Error('401: Unauthorized');
      },
    },
    updateDrink: {
      type: DrinkType,
      args: {
        drink_id: { type: new GraphQLNonNull(GraphQLInt) },
        drink: { type: DrinkInputType },
      },
      resolve(parentValue, { drink_id, drink }, context) {
        const user_id = getUserId(context);
        if (user_id) {
          return updateDrinkMutationResolver(drink, drink_id, user_id);
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
          return createGrinderMutationResolver(grinder, user_id);
        }
        throw new Error('401: Unauthorized');
      },
    },
    deleteGrinder: {
      type: GraphQLInt,
      args: {
        grinder_id: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parentValue, { grinder_id }, context) {
        const user_id = getUserId(context);
        if (user_id) {
          return deleteGrinderMutationResolver(grinder_id, user_id)
            ? grinder_id
            : 0;
        }
        throw new Error('401: Unauthorized');
      },
    },
    updateGrinder: {
      type: GrinderType,
      args: {
        grinder_id: { type: new GraphQLNonNull(GraphQLInt) },
        grinder: { type: GrinderInputType },
      },
      resolve(parentValue, { grinder_id, grinder }, context) {
        const user_id = getUserId(context);
        if (user_id) {
          return updateGrinderMutationResolver(grinder, grinder_id, user_id);
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
          return createOriginMutationResolver(name, user_id);
        }
        throw new Error('401: Unauthorized');
      },
    },
    deleteOrigin: {
      type: GraphQLInt,
      args: {
        origin_id: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parentValue, { origin_id }, context) {
        const user_id = getUserId(context);
        if (user_id) {
          return deleteOriginMutationResolver(origin_id, user_id)
            ? origin_id
            : 0;
        }
        throw new Error('401: Unauthorized');
      },
    },
    updateOrigin: {
      type: OriginType,
      args: {
        origin_id: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLString },
      },
      resolve(parentValue, { origin_id, name }, context) {
        const user_id = getUserId(context);
        if (user_id) {
          return updateOriginMutationResolver(name, origin_id, user_id);
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
          return createRoasterMutationResolver(roaster, user_id);
        }
        throw new Error('401: Unauthorized');
      },
    },
    deleteRoaster: {
      type: GraphQLInt,
      args: {
        roaster_id: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parentValue, { roaster_id }, context) {
        const user_id = getUserId(context);
        if (user_id) {
          return deleteRoasterMutationResolver(roaster_id, user_id)
            ? roaster_id
            : 0;
        }
        throw new Error('401: Unauthorized');
      },
    },
    updateRoaster: {
      type: RoasterType,
      args: {
        roaster_id: { type: new GraphQLNonNull(GraphQLInt) },
        roaster: { type: RoasterInputType },
      },
      resolve(parentValue, { roaster_id, roaster }, context) {
        const user_id = getUserId(context);
        if (user_id) {
          return updateRoasterMutationResolver(roaster, roaster_id, user_id);
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
          return createWaterMutationResolver(water, user_id);
        }
        throw new Error('401: Unauthorized');
      },
    },
    deleteWater: {
      type: GraphQLInt,
      args: {
        water_id: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parentValue, { water_id }, context) {
        const user_id = getUserId(context);
        if (user_id) {
          return deleteWaterMutationResolver(water_id, user_id) ? water_id : 0;
        }
        throw new Error('401: Unauthorized');
      },
    },
    updateWater: {
      type: WaterType,
      args: {
        water_id: { type: new GraphQLNonNull(GraphQLInt) },
        water: { type: WaterInputType },
      },
      resolve(parentValue, { water_id, water }, context) {
        const user_id = getUserId(context);
        if (user_id) {
          return updateWaterMutationResolver(water, water_id, user_id);
        }
        throw new Error('401: Unauthorized');
      },
    },
  },
});

export default JackEnjoysCoffeeMutationType;

/**
 * The top level Mutation Type for the jack-enjoys-coffee app.
 */
import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import { CoffeeType } from './coffee_type.js';
import { RoasterInputType } from './inputs/roaster_input_type.js';
import { OriginType } from './origin_type.js';
import { RoasterType } from './roaster_type.js';
import { originsMutationResolver } from '../resolvers/origins/origin_mutation_type_resolvers.js';

const JackEnjoysCoffeeMutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    roasters: {
      type: RoasterType,
      args: {
        roasters: { type: GraphQLList(RoasterInputType) },
      },
      resolve(parentValue, args) {
        // This is where we save the roaster to the DB
        console.log(args);
      },
    },
    coffees: {
      type: CoffeeType,
      args: {
        name: { type: GraphQLString },
        roaster: { type: RoasterInputType },
        origin: { type: GraphQLString },
        process: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        // This is where we save the coffee to the DB
        console.log(args);
      },
    },
    origins: {
      type: OriginType,
      args: {
        names: { type: GraphQLList(GraphQLString) },
      },
      resolve(parentValue, { names }) {
        // This is where we save the origin to the DB
        console.log(names);
        return originsMutationResolver(names);
      },
    },
    // brew: { type: GraphQLObjectType },
  },
});

export default JackEnjoysCoffeeMutationType;

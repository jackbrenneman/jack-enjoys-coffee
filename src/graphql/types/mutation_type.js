/**
 * The top level Mutation Type for the jack-enjoys-coffee app.
 */
import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import { CoffeeType } from './coffee_type.js';
import { RoasterInputType } from './inputs/roaster_input_type.js';
import { OriginType } from './origin_type.js';
import { RoasterType } from './roaster_type.js';
import { roastersMutationResolver } from '../resolvers/roasters/roaster_mutation_type_resolvers.js';
import { originsMutationResolver } from '../resolvers/origins/origin_mutation_type_resolvers.js';
import { processesMutationResolver } from '../resolvers/processes/process_mutation_type_resolvers.js';
import { ProcessType } from './process_type.js';
import { CoffeeInputType } from './inputs/coffee_input_type.js';

const JackEnjoysCoffeeMutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    roasters: {
      type: RoasterType,
      args: {
        roasters: { type: GraphQLList(RoasterInputType) },
      },
      resolve(parentValue, { roasters }) {
        return roastersMutationResolver(roasters);
      },
    },
    coffees: {
      type: CoffeeType,
      args: {
        coffees: { type: GraphQLList(CoffeeInputType) },
      },
      resolve(parentValue, { coffees }) {
        console.log(coffees);
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
    processes: {
      type: ProcessType,
      args: {
        names: { type: GraphQLList(GraphQLString) },
      },
      resolve(parentValue, { names }) {
        // This is where we save the processes to the DB
        return processesMutationResolver(names);
      },
    },
  },
});

export default JackEnjoysCoffeeMutationType;

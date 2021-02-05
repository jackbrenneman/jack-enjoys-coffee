/**
 * The top level Mutation Type for the jack-enjoys-coffee app.
 */
import { GraphQLObjectType } from 'graphql';

const JackEnjoysCoffeeMutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    roaster: { type: GraphQLObjectType },
    // user: { type: GraphQLObjectType },
    // coffee: { type: GraphQLObjectType },
    // brew: { type: GraphQLObjectType },
  },
});

export default JackEnjoysCoffeeMutationType;

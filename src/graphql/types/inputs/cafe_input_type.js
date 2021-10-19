/**
 * Cafe input type. Used for mutations.
 */

 import { GraphQLString, GraphQLInputObjectType, GraphQLBoolean } from 'graphql';

 export const CafeInputType = new GraphQLInputObjectType({
   name: 'CafeInput',
   description: 'Contains all the info needed to add a cafe info in a mutation',
   fields: {
     name: { type: GraphQLString },
     city: { type: GraphQLString },
     state: { type: GraphQLString },
     country: { type: GraphQLString },
     website: { type: GraphQLString },
     is_active: { type: GraphQLBoolean, defaultValue: true },
   },
 });

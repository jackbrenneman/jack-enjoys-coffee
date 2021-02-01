/**
 * Method Category Enum for brewing coffee. Options:
 *   - Espresso
 *   - Pour Over
 *   - Immersion
 * This will determine which Type Method resolves to.
 */

import { GraphQLEnumType } from 'graphql';

export const MethodCategoryEnum = new GraphQLEnumType({
  name: 'MethodCategory',
  description: 'The category for the method in which coffee is brewed.',
  values: {
    ESPRESSO: { value: 0 },
    POUROVER: { value: 1 },
    IMMERSION: { value: 2 },
  },
});

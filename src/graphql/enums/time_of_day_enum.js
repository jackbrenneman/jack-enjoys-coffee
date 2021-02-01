/**
 * Time of Day Enum. Options:
 *   - Morning
 *   - Afternoon
 *   - Night
 */

import { GraphQLEnumType } from 'graphql';

export const TimeOfDayEnum = new GraphQLEnumType({
  name: 'TimeOfDay',
  description: 'Time of day that the coffee drinking took place.',
  values: {
    MORNING: { value: 0 },
    AFTERNOON: { value: 1 },
    NIGHT: { value: 2 },
  },
});

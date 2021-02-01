/**
 * Time Type. Contains all the info on the timing of a coffee entry
 */

import { GraphQLObjectType } from 'graphql';
import { DateType } from './date_type.js';
import { TimeOfDayEnum } from '../enums/time_of_day_enum.js';

export const TimeType = new GraphQLObjectType({
  name: 'Time',
  description: 'Contains all info on the timing of a coffee entry',
  fields: {
    date: { type: DateType },
    timeOfDay: { type: TimeOfDayEnum },
  },
});

/**
 * Date Type. A scalar value to hold a date
 */

import { GraphQLScalarType } from 'graphql';

// Just makes sure the date is in the right format
const dateValidator = (date) => {
  return date;
};

export const DateType = new GraphQLScalarType({
  name: 'Date',
  serialize: dateValidator,
});

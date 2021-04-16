/**
 * A single, current Coffee Entry.
 */
import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function CurrentCoffeeEntry({ coffeeEntry }) {
  const { coffee, date, brew, rating } = coffeeEntry;
  const realDate = new Date(date);
  const localeDate = realDate.toLocaleDateString();
  const { name: coffee_name, roaster, origin, process } = coffee;
  const { name: roaster_name } = roaster;
  const { name: origin_name } = origin;
  const { name: process_name } = process;
  const { method } = brew;
  const { __typename: method_name, coffee_in, liquid_out } = method;
  return (
    <TableRow>
      <TableCell align="right">{localeDate}</TableCell>
      <TableCell align="right">{roaster_name}</TableCell>
      <TableCell align="right">{rating}</TableCell>
      <TableCell align="right">{method_name}</TableCell>
      <TableCell align="right">{coffee_name}</TableCell>
      <TableCell align="right">{process_name}</TableCell>
      <TableCell align="right">{origin_name}</TableCell>
      <TableCell align="right">{coffee_in}</TableCell>
      <TableCell align="right">{liquid_out}</TableCell>
    </TableRow>
  );
}

CurrentCoffeeEntry.propTypes = {
  coffeeEntry: PropTypes.object.isRequired,
};

export default CurrentCoffeeEntry;

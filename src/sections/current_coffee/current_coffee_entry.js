/**
 * A single, current Coffee Entry.
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Material UI
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// Constants
import { espressoEnum, pouroverEnum, immersionEnum } from '../../consts.js';

function CurrentCoffeeEntry({ coffeeEntry }) {
  const { coffee, date, brew, rating } = coffeeEntry;
  const realDate = new Date(date);
  const localeDate = realDate.toLocaleDateString();
  const { name: coffee_name, roaster, origin, process } = coffee;
  const { name: roaster_name } = roaster;
  const { name: origin_name } = origin;
  const { name: process_name } = process;
  const { method } = brew;
  const {
    name: method_name,
    category,
    coffee_in,
    liquid_out,
    water_in,
    steep_time,
  } = method;

  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="right">{localeDate}</TableCell>
        <TableCell align="right">{roaster_name}</TableCell>
        <TableCell align="right">{rating}</TableCell>
        <TableCell align="right">{method_name}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Origin</TableCell>
                    <TableCell>Process</TableCell>
                    <TableCell>Coffee Name</TableCell>
                    {category === espressoEnum && (
                      <>
                        <TableCell align="right">Coffee In (g)</TableCell>
                        <TableCell align="right">Liquid Out (g)</TableCell>
                      </>
                    )}
                    {category === pouroverEnum && (
                      <>
                        <TableCell align="right">Coffee In (g)</TableCell>
                        <TableCell align="right">Water In (g)</TableCell>
                      </>
                    )}
                    {category === immersionEnum && (
                      <>
                        <TableCell align="right">Coffee In (g)</TableCell>
                        <TableCell align="right">Water In (g)</TableCell>
                        <TableCell align="right">Steep Time (s)</TableCell>
                      </>
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="right">{origin_name}</TableCell>
                    <TableCell align="right">{process_name}</TableCell>
                    <TableCell align="right">{coffee_name}</TableCell>
                    {category === espressoEnum && (
                      <>
                        <TableCell align="right">{coffee_in}</TableCell>
                        <TableCell align="right">{liquid_out}</TableCell>
                      </>
                    )}
                    {category === pouroverEnum && (
                      <>
                        <TableCell align="right">{coffee_in}</TableCell>
                        <TableCell align="right">{water_in}</TableCell>
                      </>
                    )}
                    {category === immersionEnum && (
                      <>
                        <TableCell align="right">{coffee_in}</TableCell>
                        <TableCell align="right">{water_in}</TableCell>
                        <TableCell align="right">{steep_time}</TableCell>
                      </>
                    )}
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

CurrentCoffeeEntry.propTypes = {
  coffeeEntry: PropTypes.object.isRequired,
};

export default CurrentCoffeeEntry;

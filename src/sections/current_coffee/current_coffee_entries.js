/**
 * Multiple Coffee Entries to display.
 */
import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// Custom Components
import CoffeeEntry from './current_coffee_entry.js';

function CurrentCoffeeEntries({ coffeeEntries }) {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const classes = useStyles();

  return (
    <Box>
      <Box py={4}>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            stickyHeader
            aria-label="current_coffee_entries"
          >
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Roaster</TableCell>
                <TableCell align="right">Rating</TableCell>
                <TableCell align="right">Method</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {coffeeEntries.map((coffeeEntry) => (
                <CoffeeEntry
                  key={coffeeEntry.coffee_entry_id}
                  coffeeEntry={coffeeEntry}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

CurrentCoffeeEntries.propTypes = {
  coffeeEntries: PropTypes.array.isRequired,
};

export default CurrentCoffeeEntries;

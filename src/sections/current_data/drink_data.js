/**
 * Drink Data. Shows all drinks stored in the DB
 */
import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function DrinkRow({ drink }) {
  const { name, method } = drink;
  const { name: methodName } = method;

  return (
    <React.Fragment key={name}>
      <TableRow>
        <TableCell align="left">
          <Typography variant="caption">{name}</Typography>
        </TableCell>
        <TableCell align="right">
          <Typography variant="caption">{methodName}</Typography>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

DrinkRow.propTypes = {
  drink: PropTypes.shape({
    drink_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    method: PropTypes.object.isRequired,
  }).isRequired,
};

function DrinkData({ drinks }) {
  return (
    <Box pb={2}>
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <Box p={2}>
            <Typography variant="h6">Drinks</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container align="center" justify="center">
            <Grid item xs={11}>
              <TableContainer component={Paper}>
                <Table size="small" stickyHeader aria-label="roasters">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">
                        <Typography variant="subtitle2">Name</Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography variant="subtitle2">Method</Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {drinks.map((drink) => (
                      <DrinkRow key={drink.name} drink={drink} />
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

DrinkData.propTypes = {
  drinks: PropTypes.array.isRequired,
};

export default DrinkData;

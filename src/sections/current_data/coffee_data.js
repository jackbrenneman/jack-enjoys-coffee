/**
 * Coffee Data. Shows all coffees stored in the DB
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

function CoffeeRow(props) {
  const { coffee } = props;
  const { name, origin, process, roaster } = coffee;
  const { name: originName } = origin;
  const { name: processName } = process;
  const { name: roasterName } = roaster;

  return (
    <React.Fragment key={name}>
      <TableRow>
        <TableCell align="left">
          <Typography variant="caption">{name}</Typography>
        </TableCell>
        <TableCell align="right">
          <Typography variant="caption">{roasterName}</Typography>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

CoffeeRow.propTypes = {
  coffee: PropTypes.shape({
    coffee_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    roaster_id: PropTypes.number,
    origin_id: PropTypes.number,
    process_id: PropTypes.number,
  }).isRequired,
};

function CoffeeData({ coffees }) {
  return (
    <Box pb={2}>
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <Box p={2}>
            <Typography variant="h6">Coffees</Typography>
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
                        <Typography variant="subtitle2">Roaster</Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {coffees.map((coffee) => (
                      <CoffeeRow key={coffee.name} coffee={coffee} />
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

CoffeeData.propTypes = {
  coffees: PropTypes.array.isRequired,
};

export default CoffeeData;

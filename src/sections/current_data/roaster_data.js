/**
 * Roaster Data. Shows all roasters stored in the DB
 */
import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

function RoasterRow(props) {
  const { roaster } = props;
  const { name, city, website } = roaster;

  return (
    <React.Fragment key={name}>
      <TableRow>
        <TableCell align="left">
          <Link href={website} target="_blank" rel="noopener">
            <Typography variant="caption">{name}</Typography>
          </Link>
        </TableCell>
        <TableCell align="right">
          <Typography variant="caption">{city}</Typography>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

RoasterRow.propTypes = {
  roaster: PropTypes.shape({
    name: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    country: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
};

function RoasterData({ roasters }) {
  return (
    <Box pb={2}>
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <Box p={2}>
            <Typography variant="h6">Roasters</Typography>
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
                        <Typography variant="subtitle2">Location</Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {roasters.map((roaster) => (
                      <RoasterRow key={roaster.name} roaster={roaster} />
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

RoasterData.propTypes = {
  roasters: PropTypes.array.isRequired,
};

export default RoasterData;

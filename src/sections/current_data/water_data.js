/**
 * Water Data. Shows all waters stored in the DB
 */
import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

function WaterData({ waters }) {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <Box p={4}>
          <Typography variant="h6">Waters</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid container align="center" justify="center">
          <Grid item xs={12} sm={6}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

WaterData.propTypes = {
  waters: PropTypes.array.isRequired,
};

export default WaterData;

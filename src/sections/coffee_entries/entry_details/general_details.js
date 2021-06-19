/**
 * General Details on a brew for an entry
 */
import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function GeneralDetails({
  coffee_name,
  grinder_name,
  grinder_setting,
  origin_name,
  process_name,
  water_name,
}) {
  const useStyles = makeStyles(() => ({
    name: {
      fontWeight: 'bold',
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Grid direction="row" container justify="center" alignItems="center">
        <Grid item>
          <Box>
            <Typography variant="caption" color="textSecondary">
              {process_name}
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box px={1}>
            <Typography variant="caption" className={classes.name}>
              {coffee_name}
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <Typography variant="caption" color="textSecondary">
              {origin_name}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid direction="row" container justify="center" alignItems="center">
        {grinder_name && (
          <Grid item>
            <Box px={1}>
              <Typography variant="caption" color="textSecondary">
                {grinder_name} ({grinder_setting})
              </Typography>
            </Box>
          </Grid>
        )}
        {water_name && (
          <Grid item>
            <Box px={1}>
              <Typography variant="caption" color="textSecondary">
                {water_name}
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
    </>
  );
}

GeneralDetails.propTypes = {
  coffee_name: PropTypes.string,
  process_name: PropTypes.string,
  origin_name: PropTypes.string,
  grinder_name: PropTypes.string,
  grinder_setting: PropTypes.number,
  water_name: PropTypes.string,
};

export default GeneralDetails;

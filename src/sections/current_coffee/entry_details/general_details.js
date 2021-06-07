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
  notes,
  brewer_name,
  coffee_name,
  process_name,
  origin_name,
}) {
  const useStyles = makeStyles(() => ({
    card: {
      padding: '0',
    },
    header: {
      padding: '0',
      paddingTop: '10px',
    },
    content: {
      padding: '0',
      '&:last-child': {
        padding: 0,
      },
    },
    ratingBad: {
      color: 'red',
      fontWeight: 'bold',
    },
    ratingMeh: {
      color: '#e3b129',
      fontWeight: 'bold',
    },
    ratingGood: {
      color: 'green',
      fontWeight: 'bold',
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Grid
        direction="row"
        container
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <Box px={2}>
            <Typography variant="caption">{coffee_name}</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        direction="row"
        container
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <Box px={2}>
            <Typography variant="caption">{process_name}</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box px={2}>
            <Typography variant="caption">{origin_name}</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        direction="row"
        container
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <Box px={2}>
            <Typography variant="caption">{brewer_name}</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        direction="row"
        container
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <Box px={2}>
            <Typography variant="caption">{notes}</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

GeneralDetails.propTypes = {
  notes: PropTypes.string,
  brewer_name: PropTypes.string,
  coffee_name: PropTypes.string,
  process_name: PropTypes.string,
  origin_name: PropTypes.string,
};

export default GeneralDetails;

/**
 * Details on an Immersion brew for an entry
 */
import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
// Custom Components
import GeneralDetails from './general_details.js';

function ImmersionDetails({ coffee_in, water_in, steep_time, generalDetails }) {
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
    notes: {
      lineHeight: 1,
      fontSize: '10px',
    },
  }));

  const classes = useStyles();

  const { notes, brewer_name } = generalDetails;

  const getReadableSteepTime = () => {
    const hours = Math.floor(steep_time / 3600);
    const minutes = Math.floor((steep_time - hours * 3600) / 60);
    const seconds = steep_time - hours * 3600 - minutes * 60;
    return `${hours} hours ${minutes} minutes ${seconds} seconds`;
  };

  return (
    <Box p={1}>
      <Card raised className={classes.card}>
        <CardContent className={classes.content}>
          <GeneralDetails {...generalDetails} />
          <Grid
            direction="row"
            container
            justify="space-around"
            alignItems="center"
          >
            {brewer_name && (
              <Grid item>
                <Box px={1}>
                  <Typography variant="caption" color="textSecondary">
                    {brewer_name}
                  </Typography>
                </Box>
              </Grid>
            )}
            {coffee_in && water_in && (
              <Grid item>
                <Box px={1}>
                  <Typography variant="caption" color="textSecondary">
                    {coffee_in} : {water_in}
                  </Typography>
                </Box>
              </Grid>
            )}
          </Grid>
          {steep_time && (
            <Grid container justify="center" alignItems="center">
              <Grid item>
                <Box px={1}>
                  <Typography variant="caption" color="textSecondary">
                    {getReadableSteepTime()}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          )}
          <Grid container justify="center" alignItems="center">
            <Grid xs={12} item>
              <Divider variant="middle" />
            </Grid>
          </Grid>
          {notes && (
            <Grid container justify="center" alignItems="center">
              <Grid item>
                <Box px={1} pb={1}>
                  <Typography variant="caption" className={classes.notes}>
                    {notes}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

ImmersionDetails.propTypes = {
  coffee_in: PropTypes.number,
  water_in: PropTypes.number,
  steep_time: PropTypes.number,
  generalDetails: PropTypes.object,
};

export default ImmersionDetails;

/**
 * Details on an Espresso drink for an entry
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

function EspressoDetails({ coffee_in, liquid_out, generalDetails }) {
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
  const { notes, brewer_name } = generalDetails;

  const classes = useStyles();

  return (
    <Box p={1}>
      <Card raised className={classes.card}>
        <CardContent className={classes.content}>
          <GeneralDetails {...generalDetails} />
          <Grid direction="row" container justify="center" alignItems="center">
            {brewer_name && (
              <Grid item>
                <Box px={2}>
                  <Typography
                    variant="caption"
                    className={classes.ratio}
                    color="textSecondary"
                  >
                    {brewer_name}
                  </Typography>
                </Box>
              </Grid>
            )}
            {coffee_in && (
              <Grid item>
                <Box px={2}>
                  <Typography
                    variant="caption"
                    className={classes.ratio}
                    color="textSecondary"
                  >
                    {coffee_in} : {liquid_out}
                  </Typography>
                </Box>
              </Grid>
            )}
          </Grid>
          <Grid container justify="center" alignItems="center">
            <Grid xs={12} item>
              <Divider variant="middle" />
            </Grid>
          </Grid>
          <Grid
            direction="row"
            container
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Box px={1} pb={1}>
                <Typography variant="caption" className={classes.notes}>
                  {notes}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

EspressoDetails.propTypes = {
  coffee_in: PropTypes.number,
  liquid_out: PropTypes.number,
  generalDetails: PropTypes.object,
};

export default EspressoDetails;

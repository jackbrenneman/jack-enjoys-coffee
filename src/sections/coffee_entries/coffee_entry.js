/**
 * A single, current Coffee Entry.
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
// Custom Components
import EspressoDetails from './entry_details/espresso_details.js';
import PouroverDetails from './entry_details/pourover_details.js';
import ImmersionDetails from './entry_details/immersion_details.js';
// Constants
import { espressoEnum, pouroverEnum, immersionEnum } from '../../consts.js';

function CurrentCoffeeEntry({ coffeeEntry }) {
  const { coffee, date, brew, rating, notes } = coffeeEntry;
  const realDate = new Date(date);
  const localeDate = realDate.toLocaleDateString('en-US', { timeZone: 'UTC' });
  const { name: coffee_name, roaster, origin, process } = coffee;
  const { name: roaster_name } = roaster;
  const { name: origin_name } = origin;
  const { name: process_name } = process;
  const { method, grind, water } = brew;

  const {
    name: method_name,
    brewer,
    category,
    coffee_in,
    drink,
    liquid_out,
    water_in,
    steep_time,
  } = method;
  const { name: drink_name } = drink;
  const { name: brewer_name } = brewer;
  const { name: water_name } = water;
  const { grinder, setting } = grind;
  const { name: grinder_name } = grinder;

  const [open, setOpen] = useState(false);

  const handleMoreDetailsClick = (e) => {
    setOpen(!open);
  };

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

  const getRatingStyle = () => {
    if (rating >= 6) {
      return classes.ratingGood;
    }
    if (rating >= 4) {
      return classes.ratingMeh;
    }
    return classes.ratingBad;
  };

  const generalDetails = {
    brewer_name: brewer_name,
    coffee_name: coffee_name,
    origin_name: origin_name,
    process_name: process_name,
    grinder_name: grinder_name,
    grinder_setting: parseInt(setting),
    water_name: water_name,
    notes: notes,
  };

  const getMoreDetailsView = () => {
    switch (category) {
      case espressoEnum:
        return (
          <EspressoDetails
            coffee_in={coffee_in}
            liquid_out={liquid_out}
            generalDetails={generalDetails}
          />
        );
      case pouroverEnum:
        return (
          <PouroverDetails
            coffee_in={coffee_in}
            water_in={water_in}
            generalDetails={generalDetails}
          />
        );
      case immersionEnum:
        return (
          <ImmersionDetails
            coffee_in={coffee_in}
            water_in={water_in}
            steep_time={steep_time}
            generalDetails={generalDetails}
          />
        );
      default:
        return <div />;
    }
  };

  return (
    <Box p={1}>
      <Card raised className={classes.card}>
        <CardContent className={classes.content}>
          <CardHeader
            className={classes.header}
            titleTypographyProps={{ variant: 'caption' }}
            subheaderTypographyProps={{ variant: 'caption' }}
            title={roaster_name}
            subheader={`${method_name} | ${drink_name}`}
          />
          <Grid
            direction="row"
            container
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Box px={2}>
                <Typography className={getRatingStyle()} variant="caption">
                  {rating}
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box px={1}>
                <Typography variant="caption">{localeDate}</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box px={1}>
                <IconButton
                  aria-label="more"
                  onClick={handleMoreDetailsClick}
                  size="small"
                >
                  <MoreHorizIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {open && getMoreDetailsView()}
    </Box>
  );
}

CurrentCoffeeEntry.propTypes = {
  coffeeEntry: PropTypes.object.isRequired,
};

export default CurrentCoffeeEntry;

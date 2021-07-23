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
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';
// Custom Components
import EspressoDetails from './entry_details/espresso_details.js';
import PouroverDetails from './entry_details/pourover_details.js';
import ImmersionDetails from './entry_details/immersion_details.js';
// Constants
import { espressoId, pouroverId, immersionId } from '../../consts.js';
import EditCoffeeEntry from './edit/edit_coffee_entry.js';

function CurrentCoffeeEntry({
  coffeeEntry,
  currentData,
  onCoffeeEntryDeletion,
}) {
  const [currentCoffeeEntry, setCurrentCoffeeEntry] = useState(coffeeEntry);
  const { coffee, date, brew, rating, notes } = currentCoffeeEntry;
  const realDate = new Date(date);
  const localeDate = realDate.toLocaleDateString('en-US', { timeZone: 'UTC' });
  const { name: coffee_name, roaster, origin, process } = coffee;
  const { name: roaster_name } = roaster;
  const { name: origin_name } = origin;
  const { name: process_name } = process;
  const { method, grind, water } = brew;

  const {
    name: method_name,
    method_id,
    brewer,
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

  const [openEdit, setOpenEdit] = useState(false);

  const handleSaveChangesSuccess = (newData) => {
    setCurrentCoffeeEntry(newData);
  };

  const handleSaveChangesFail = () => {
    // TODO: show the user there was a failed save
    console.log('failed save -- coffee entry');
  };

  const handleEditClick = (e) => {
    setOpen(false);
    setOpenEdit(!openEdit);
  };

  const handleMoreDetailsClick = (e) => {
    setOpenEdit(false);
    setOpen(!open);
  };

  const handleExpandLessClick = (e) => {
    setOpen(false);
    setOpenEdit(false);
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
    grinder_setting: parseFloat(setting),
    water_name: water_name,
    notes: notes,
  };

  const getMoreDetailsView = () => {
    switch (method_id) {
      case espressoId:
        return (
          <EspressoDetails
            coffee_in={coffee_in}
            liquid_out={liquid_out}
            generalDetails={generalDetails}
          />
        );
      case pouroverId:
        return (
          <PouroverDetails
            coffee_in={coffee_in}
            water_in={water_in}
            generalDetails={generalDetails}
          />
        );
      case immersionId:
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
          <Grid direction="row" container justify="center" alignItems="center">
            <Grid item>
              <Box px={2}>
                <Typography className={getRatingStyle()} variant="caption">
                  {rating}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid
            direction="row"
            container
            justify="space-between"
            alignItems="center"
          >
            {openEdit ? (
              <Grid item>
                <Box px={1}>
                  <IconButton
                    aria-label="more"
                    onClick={handleExpandLessClick}
                    size="small"
                  >
                    <ExpandLessIcon />
                  </IconButton>
                </Box>{' '}
              </Grid>
            ) : (
              <Grid item>
                <Box px={1}>
                  <IconButton
                    aria-label="more"
                    onClick={handleEditClick}
                    size="small"
                  >
                    <EditTwoToneIcon />
                  </IconButton>
                </Box>
              </Grid>
            )}
            <Grid item>
              <Box px={1}>
                <Typography variant="caption">{localeDate}</Typography>
              </Box>
            </Grid>
            {open ? (
              <Grid item>
                <Box px={1}>
                  <IconButton
                    aria-label="more"
                    onClick={handleExpandLessClick}
                    size="small"
                  >
                    <ExpandLessIcon />
                  </IconButton>
                </Box>{' '}
              </Grid>
            ) : (
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
            )}
          </Grid>
        </CardContent>
      </Card>
      {open && !openEdit && getMoreDetailsView()}
      {openEdit && !open && (
        <EditCoffeeEntry
          coffeeEntry={currentCoffeeEntry}
          currentData={currentData}
          onSaveChangesSuccess={handleSaveChangesSuccess}
          onSaveChangesFail={handleSaveChangesFail}
          onCoffeeEntryDeletion={onCoffeeEntryDeletion}
        />
      )}
    </Box>
  );
}

CurrentCoffeeEntry.propTypes = {
  onCoffeeEntryDeletion: PropTypes.func.isRequired,
  coffeeEntry: PropTypes.object.isRequired,
  currentData: PropTypes.shape({
    brewers: PropTypes.array,
    coffees: PropTypes.array,
    drinks: PropTypes.array,
    grinders: PropTypes.array,
    methods: PropTypes.array,
    origins: PropTypes.array,
    processes: PropTypes.array,
    roasters: PropTypes.array,
    waters: PropTypes.array,
  }),
};

export default CurrentCoffeeEntry;

/**
 * The Current Data Container, which will allow users to basically see what data is in the DBs, including:
 *    - Brewers
 *    - Coffees
 *    - Drinks
 *    - Grinders
 *    - Origins
 *    - Roasters
 *    - Waters
 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// React Router
import { NavLink } from 'react-router-dom';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
// Queries and Fetching
import { currentDataQuery } from '../../graphql/queries/data_entry_queries.js';
import { queryGQL } from '../../graphql/fetch.js';
// Data Components
import BrewerData from './brewer_data.js';
import CoffeeData from './coffee_data.js';
import DrinkData from './drink_data.js';
import GrinderData from './grinder_data.js';
import OriginData from './origin_data.js';
import RoasterData from './roaster_data.js';
import WaterData from './water_data.js';
// Constants
import {
  roasterEnum,
  coffeeEnum,
  originEnum,
  brewerEnum,
  waterEnum,
  drinkEnum,
  grinderEnum,
  currentDataDefault,
  dataEntryDefault,
} from '../../consts.js';

function CurrentDataContainer({ user }) {
  // State used for determining which data entry component to show.
  const [dataEntry, setDataEntry] = useState(dataEntryDefault);

  // State that basically contains all the current info
  const [currentData, setCurrentData] = useState(currentDataDefault);

  const useStyles = makeStyles((theme) => ({
    radio: {
      padding: '2px',
    },
  }));

  const classes = useStyles();

  // When the component renders, we fetch all the current data
  useEffect(() => {
    queryGQL(currentDataQuery)
      .then(({ data }) => {
        if (data) {
          setCurrentData(data);
        }
      })
      .catch((e) => {
        // TODO: Determine what to do if fetch is unsuccessful
        console.log(e);
      });
  }, []);

  const handleDataOptionChange = (e) => {
    setDataEntry({
      ...dataEntry,
      dataOption: e.target.value,
    });
  };

  const { dataOption } = dataEntry;
  const {
    brewers,
    coffees,
    drinks,
    grinders,
    methods,
    origins,
    processes,
    roasters,
    waters,
  } = currentData;

  const handleCoffeeDeletion = (deleted_coffee_id) => {
    const coffeesMinusDeletedOne = coffees.filter(
      ({ coffee_id }) => deleted_coffee_id !== coffee_id
    );
    setCurrentData({
      ...currentData,
      coffees: coffeesMinusDeletedOne,
    });
  };

  const handleBrewerDeletion = (deleted_brewer_id) => {
    const brewersMinusDeletedOne = brewers.filter(
      ({ brewer_id }) => deleted_brewer_id !== brewer_id
    );
    setCurrentData({
      ...currentData,
      brewers: brewersMinusDeletedOne,
    });
  };

  const handleDrinkDeletion = (deleted_drink_id) => {
    const drinksMinusDeletedOne = drinks.filter(
      ({ drink_id }) => deleted_drink_id !== drink_id
    );
    setCurrentData({
      ...currentData,
      drinks: drinksMinusDeletedOne,
    });
  };

  const handleGrinderDeletion = (deleted_grinder_id) => {
    const grindersMinusDeletedOne = grinders.filter(
      ({ grinder_id }) => deleted_grinder_id !== grinder_id
    );
    setCurrentData({
      ...currentData,
      grinders: grindersMinusDeletedOne,
    });
  };

  const handleOriginDeletion = (deleted_origin_id) => {
    const originsMinusDeletedOne = origins.filter(
      ({ origin_id }) => deleted_origin_id !== origin_id
    );
    setCurrentData({
      ...currentData,
      origins: originsMinusDeletedOne,
    });
  };

  const handleRoasterDeletion = (deleted_roaster_id) => {
    const roastersMinusDeletedOne = roasters.filter(
      ({ roaster_id }) => deleted_roaster_id !== roaster_id
    );
    setCurrentData({
      ...currentData,
      roasters: roastersMinusDeletedOne,
    });
  };

  const handleWaterDeletion = (deleted_water_id) => {
    const watersMinusDeletedOne = waters.filter(
      ({ water_id }) => deleted_water_id !== water_id
    );
    setCurrentData({
      ...currentData,
      waters: watersMinusDeletedOne,
    });
  };

  const getDataComponent = () => {
    switch (dataOption) {
      case brewerEnum:
        return (
          <BrewerData
            brewers={brewers}
            methods={methods}
            onBrewerDeletion={handleBrewerDeletion}
          />
        );
      case coffeeEnum:
        return (
          <CoffeeData
            coffees={coffees}
            origins={origins}
            processes={processes}
            roasters={roasters}
            onCoffeeDeletion={handleCoffeeDeletion}
          />
        );
      case drinkEnum:
        return (
          <DrinkData
            drinks={drinks}
            methods={methods}
            onDrinkDeletion={handleDrinkDeletion}
          />
        );
      case grinderEnum:
        return (
          <GrinderData
            grinders={grinders}
            onGrinderDeletion={handleGrinderDeletion}
          />
        );
      case originEnum:
        return (
          <OriginData
            origins={origins}
            onOriginDeletion={handleOriginDeletion}
          />
        );
      case roasterEnum:
        return (
          <RoasterData
            roasters={roasters}
            coffees={coffees}
            onRoasterDeletion={handleRoasterDeletion}
          />
        );
      case waterEnum:
        return (
          <WaterData waters={waters} onWaterDeletion={handleWaterDeletion} />
        );
      default:
        return <div />;
    }
  };

  return (
    <Box>
      {user?.user_id ? (
        <>
          <Box py={4}>
            <Grid container direction="column" alignItems="center">
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    aria-label="dataOptions"
                    name="dataOptions"
                    value={dataOption}
                    onChange={handleDataOptionChange}
                  >
                    <Grid container align="center" justify="center">
                      <Grid item xs={12}>
                        <FormControlLabel
                          value={brewerEnum}
                          control={<Radio className={classes.radio} />}
                          label={
                            <Typography variant="caption" align="center">
                              Brewers
                            </Typography>
                          }
                          labelPlacement="bottom"
                        />
                        <FormControlLabel
                          value={coffeeEnum}
                          control={<Radio className={classes.radio} />}
                          label={
                            <Typography variant="caption" align="center">
                              Coffees
                            </Typography>
                          }
                          labelPlacement="bottom"
                        />
                        <FormControlLabel
                          value={drinkEnum}
                          control={<Radio className={classes.radio} />}
                          label={
                            <Typography variant="caption" align="center">
                              Drinks
                            </Typography>
                          }
                          labelPlacement="bottom"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel
                          value={grinderEnum}
                          control={<Radio className={classes.radio} />}
                          label={
                            <Typography variant="caption" align="center">
                              Grinders
                            </Typography>
                          }
                          labelPlacement="bottom"
                        />
                        <FormControlLabel
                          value={originEnum}
                          control={<Radio className={classes.radio} />}
                          label={
                            <Typography variant="caption" align="center">
                              Origins
                            </Typography>
                          }
                          labelPlacement="bottom"
                        />
                        <FormControlLabel
                          value={roasterEnum}
                          control={<Radio className={classes.radio} />}
                          label={
                            <Typography variant="caption" align="center">
                              Roasters
                            </Typography>
                          }
                          labelPlacement="bottom"
                        />
                        <FormControlLabel
                          value={waterEnum}
                          control={<Radio className={classes.radio} />}
                          label={
                            <Typography variant="caption" align="center">
                              Waters
                            </Typography>
                          }
                          labelPlacement="bottom"
                        />
                      </Grid>
                    </Grid>
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Box pt={2}>
                  <Typography variant="caption" align="center">
                    <NavLink className={classes.navLink} to={'/new_data'}>
                      Add New Data
                    </NavLink>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Grid>
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          </Grid>
          <Grid>
            <Grid item xs={12}>
              {getDataComponent()}
            </Grid>
          </Grid>
        </>
      ) : (
        <Box py={4}>
          <Typography variant="body1" align="center">
            You must{' '}
            {
              <NavLink className={classes.navLink} to={'/login'}>
                Login
              </NavLink>
            }{' '}
            to add new data
          </Typography>
        </Box>
      )}
    </Box>
  );
}

CurrentDataContainer.propTypes = {
  user: PropTypes.object,
};

CurrentDataContainer.defaultProps = {
  user: {},
};

export default CurrentDataContainer;

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
// Material UI
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
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

function CurrentDataContainer() {
  // State used for determining which data entry component to show.
  const [dataEntry, setDataEntry] = useState(dataEntryDefault);

  // State that basically contains all the current info
  const [currentData, setCurrentData] = useState(currentDataDefault);

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

  const getDataComponent = () => {
    switch (dataOption) {
      case brewerEnum:
        return <BrewerData currentBrewers={brewers} currentMethods={methods} />;
      case coffeeEnum:
        return (
          <CoffeeData currentCoffees={coffees} currentProcesses={processes} />
        );
      case drinkEnum:
        return <DrinkData currentDrinks={drinks} />;
      case grinderEnum:
        return <GrinderData currentGrinders={grinders} />;
      case originEnum:
        return <OriginData currentOrigins={origins} />;
      case roasterEnum:
        return <RoasterData currentRoasters={roasters} />;
      case waterEnum:
        return <WaterData currentWaters={waters} />;
      default:
        return <div />;
    }
  };

  return (
    <Box>
      <Box py={4}>
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Box p={4}>
              <Typography variant="h4">View Current Data</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="dataOptions"
                name="dataOptions"
                value={dataOption}
                onChange={handleDataOptionChange}
              >
                <Grid container align="center" justify="center" spacing={2}>
                  <Grid item xs={12}>
                    <FormControlLabel
                      value={brewerEnum}
                      control={<Radio />}
                      label="Brewers"
                      labelPlacement="bottom"
                    />
                    <FormControlLabel
                      value={coffeeEnum}
                      control={<Radio />}
                      label="Coffees"
                      labelPlacement="bottom"
                    />
                    <FormControlLabel
                      value={drinkEnum}
                      control={<Radio />}
                      label="Drinks"
                      labelPlacement="bottom"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      value={grinderEnum}
                      control={<Radio />}
                      label="Grinders"
                      labelPlacement="bottom"
                    />
                    <FormControlLabel
                      value={originEnum}
                      control={<Radio />}
                      label="Origins"
                      labelPlacement="bottom"
                    />
                    <FormControlLabel
                      value={roasterEnum}
                      control={<Radio />}
                      label="Roasters"
                      labelPlacement="bottom"
                    />
                    <FormControlLabel
                      value={waterEnum}
                      control={<Radio />}
                      label="Waters"
                      labelPlacement="bottom"
                    />
                  </Grid>
                </Grid>
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <Divider variant="middle" />
      <Grid>
        <Grid item xs={12}>
          {getDataComponent()}
        </Grid>
      </Grid>
    </Box>
  );
}

export default CurrentDataContainer;

/**
 * The Data Entry Container, which will allow users (or just admins, tbd) to basically update DBs with new:
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
import { fetchGQL } from '../../graphql/fetch.js';
// Input Components
import NewCoffeeInput from './new_coffee_input.js';
import NewOriginInput from './new_origin_input.js';
import NewRoasterInput from './new_roaster_input.js';
import NewBrewerInput from './new_brewer_input.js';
import NewWaterInput from './new_water_input.js';
import NewGrinderInput from './new_grinder_input.js';
import NewDrinkInput from './new_drink_input.js';
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

function DataEntryContainer() {
  // State used for determining which data entry component to show.
  const [dataEntry, setDataEntry] = useState(dataEntryDefault);

  // State that basically contains all the current info
  const [currentData, setCurrentData] = useState(currentDataDefault);

  // When the component renders, we fetch all the current data
  useEffect(() => {
    fetchGQL(currentDataQuery)
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

  const getDataEntryForm = () => {
    switch (dataOption) {
      case brewerEnum:
        return (
          <NewBrewerInput
            dataEntry={dataEntry}
            setDataEntry={setDataEntry}
            currentBrewers={brewers}
            currentMethods={methods}
          />
        );
      case coffeeEnum:
        return (
          <NewCoffeeInput
            dataEntry={dataEntry}
            setDataEntry={setDataEntry}
            currentCoffees={coffees}
            currentProcesses={processes}
          />
        );
      case drinkEnum:
        return (
          <NewDrinkInput
            dataEntry={dataEntry}
            setDataEntry={setDataEntry}
            currentDrinks={drinks}
          />
        );
      case grinderEnum:
        return (
          <NewGrinderInput
            dataEntry={dataEntry}
            setDataEntry={setDataEntry}
            currentGrinders={grinders}
          />
        );
      case originEnum:
        return (
          <NewOriginInput
            dataEntry={dataEntry}
            setDataEntry={setDataEntry}
            currentOrigins={origins}
          />
        );
      case roasterEnum:
        return (
          <NewRoasterInput
            dataEntry={dataEntry}
            setDataEntry={setDataEntry}
            currentRoasters={roasters}
          />
        );
      case waterEnum:
        return (
          <NewWaterInput
            dataEntry={dataEntry}
            setDataEntry={setDataEntry}
            currentWaters={waters}
          />
        );
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
              <Typography variant="h4">Enter Data</Typography>
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
                      label="Brewer"
                      labelPlacement="bottom"
                    />
                    <FormControlLabel
                      value={coffeeEnum}
                      control={<Radio />}
                      label="Coffee"
                      labelPlacement="bottom"
                    />
                    <FormControlLabel
                      value={drinkEnum}
                      control={<Radio />}
                      label="Drink"
                      labelPlacement="bottom"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      value={grinderEnum}
                      control={<Radio />}
                      label="Grinder"
                      labelPlacement="bottom"
                    />
                    <FormControlLabel
                      value={originEnum}
                      control={<Radio />}
                      label="Origin"
                      labelPlacement="bottom"
                    />
                    <FormControlLabel
                      value={roasterEnum}
                      control={<Radio />}
                      label="Roaster"
                      labelPlacement="bottom"
                    />
                    <FormControlLabel
                      value={waterEnum}
                      control={<Radio />}
                      label="Water"
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
          {getDataEntryForm()}
        </Grid>
      </Grid>
    </Box>
  );
}

export default DataEntryContainer;

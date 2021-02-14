/**
 * The Data Entry Container, which will allow users (or just admins, tbd) to basically update DBs with new:
 *    - Roasters
 *    - Coffees
 *    - Origins
 *    - Processes (?)
 */
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import NewCoffeeInput from './new_coffee_input.js';
import NewOriginInput from './new_origin_input.js';
import NewRoasterInput from './new_roaster_input.js';
import NewBrewerInput from './new_brewer_input.js';
import NewWaterInput from './new_water_input.js';
import {
  roasterEnum,
  coffeeEnum,
  originEnum,
  brewerEnum,
  waterEnum,
  dataEntryDefault,
} from '../../consts.js';

function DataEntryContainer() {
  // State used for determining which data entry component to use.
  const [dataEntry, setDataEntry] = useState(dataEntryDefault);

  const handleDataOptionChange = (e) => {
    setDataEntry({
      ...dataEntry,
      dataOption: e.target.value,
    });
  };

  const { dataOption } = dataEntry;

  const getDataEntryForm = () => {
    switch (dataOption) {
      case roasterEnum:
        return (
          <NewRoasterInput dataEntry={dataEntry} setDataEntry={setDataEntry} />
        );
      case coffeeEnum:
        return (
          <NewCoffeeInput dataEntry={dataEntry} setDataEntry={setDataEntry} />
        );
      case originEnum:
        return (
          <NewOriginInput dataEntry={dataEntry} setDataEntry={setDataEntry} />
        );
      case brewerEnum:
        return (
          <NewBrewerInput dataEntry={dataEntry} setDataEntry={setDataEntry} />
        );
      case waterEnum:
        return (
          <NewWaterInput dataEntry={dataEntry} setDataEntry={setDataEntry} />
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
                      value={coffeeEnum}
                      control={<Radio />}
                      label="Coffee"
                      labelPlacement="bottom"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      value={brewerEnum}
                      control={<Radio />}
                      label="Brewer"
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

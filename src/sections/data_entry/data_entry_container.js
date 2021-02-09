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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import NewCoffeeInput from './new_coffee_input.js';
import NewOriginInput from './new_origin_input.js';
import NewRoasterInput from './new_roaster_input.js';
import {
  roasterEnum,
  coffeeEnum,
  originEnum,
  dataEntryDefault,
} from '../../consts.js';

function DataEntryContainer() {
  // State used for determining which data entry component to use
  const [dataEntry, setDataEntry] = useState(dataEntryDefault);

  const handleDataOptionChange = (e) => {
    console.log(e.target.value);
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
      default:
        return <div />;
    }
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <Box p={4}>
          <Typography variant="h6">Enter Data</Typography>
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
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        {getDataEntryForm()}
      </Grid>
    </Grid>
  );
}

export default DataEntryContainer;

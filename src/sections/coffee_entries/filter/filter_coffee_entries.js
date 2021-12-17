/**
 * Filter coffee entries
 */
import React from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import AutocompleteWrapperSimple from "../../coffee_entry/helpers/autocomplete_container_simple.js";
// Constants
import { filterCoffeeEntriesPropTypesShape } from "../../../consts.js";

function FilterCoffeeEntries({
  onSubmit,
  currentData,
  filterData,
  onFilterChange,
}) {
  const {
    filteredCoffees,
    filteredRoasters,
    filteredOrigins,
    filteredProcesses,
  } = filterData;
  const useStyles = makeStyles(() => ({
    inputSection: {
      maxWidth: "600px",
    },
    form: {
      width: "200px",
    },
    resize: {
      fontSize: 16,
      textAlign: "center",
    },
  }));

  const classes = useStyles();

  const {
    coffees: allCoffees,
    origins: allOrigins,
    processes: allProcesses,
    roasters: allRoasters,
  } = currentData;

  const handleCoffeeAdd = (addedCoffee) => {
    const addedCoffeeIndex = filteredCoffees.findIndex(
      (coffee) => coffee.coffee_id === addedCoffee?.coffee_id
    );
    if (addedCoffeeIndex > -1) {
      // If we make it in here, that means the coffee was already selected; so we don't need to add it again
      return;
    }
    const newFilteredCoffees = filteredCoffees.concat([addedCoffee]);
    onFilterChange({
      ...filterData,
      filteredCoffees: newFilteredCoffees,
    });
  };

  const handleCoffeeDelete = (deletedCoffeeId) => {
    const deletedCoffeeIndex = filteredCoffees.findIndex(
      (coffee) => coffee.coffee_id === deletedCoffeeId
    );
    const newFilteredCoffeesOne = filteredCoffees.slice(0, deletedCoffeeIndex);
    const newFilteredCoffeesTwo = filteredCoffees.slice(deletedCoffeeIndex + 1);
    const newFilteredCoffees = newFilteredCoffeesOne.concat(
      newFilteredCoffeesTwo
    );
    onFilterChange({
      ...filterData,
      filteredCoffees: newFilteredCoffees,
    });
  };

  const handleRoasterAdd = (addedRoaster) => {
    const addedRoasterIndex = filteredRoasters.findIndex(
      (roaster) => roaster.roaster_id === addedRoaster?.roaster_id
    );
    if (addedRoasterIndex > -1) {
      // If we make it in here, that means the roaster was already selected; so we don't need to add it again
      return;
    }
    const newFilteredRoasters = filteredRoasters.concat([addedRoaster]);
    onFilterChange({
      ...filterData,
      filteredRoasters: newFilteredRoasters,
    });
  };

  const handleRoasterDelete = (deletedRoasterId) => {
    const deletedRoasterIndex = filteredRoasters.findIndex(
      (roaster) => roaster.roaster_id === deletedRoasterId
    );
    const newFilteredRoastersOne = filteredRoasters.slice(
      0,
      deletedRoasterIndex
    );
    const newFilteredRoastersTwo = filteredRoasters.slice(
      deletedRoasterIndex + 1
    );
    const newFilteredRoasters = newFilteredRoastersOne.concat(
      newFilteredRoastersTwo
    );
    console.log(
      newFilteredRoastersOne,
      newFilteredRoastersTwo,
      newFilteredRoasters
    );
    onFilterChange({
      ...filterData,
      filteredRoasters: newFilteredRoasters,
    });
  };

  const handleOriginAdd = (addedOrigin) => {
    const addedOriginIndex = filteredOrigins.findIndex(
      (origin) => origin.origin_id === addedOrigin?.origin_id
    );
    if (addedOriginIndex > -1) {
      // If we make it in here, that means the origin was already selected; so we don't need to add it again
      return;
    }
    const newFilteredOrigins = filteredOrigins.concat([addedOrigin]);
    onFilterChange({
      ...filterData,
      filteredOrigins: newFilteredOrigins,
    });
  };

  const handleOriginDelete = (deletedOriginId) => {
    const deletedOriginIndex = filteredOrigins.findIndex(
      (origin) => origin.origin_id === deletedOriginId
    );
    const newFilteredOriginsOne = filteredOrigins.slice(0, deletedOriginIndex);
    const newFilteredOriginsTwo = filteredOrigins.slice(deletedOriginIndex + 1);
    const newFilteredOrigins = newFilteredOriginsOne.concat(
      newFilteredOriginsTwo
    );
    onFilterChange({
      ...filterData,
      filteredOrigins: newFilteredOrigins,
    });
  };

  const handleProcessAdd = (addedProcess) => {
    const addedProcessIndex = filteredProcesses.findIndex(
      (process) => process.process_id === addedProcess?.process_id
    );
    if (addedProcessIndex > -1) {
      // If we make it in here, that means the process was already selected; so we don't need to add it again
      return;
    }
    const newFilteredProcesses = filteredProcesses.concat([addedProcess]);
    onFilterChange({
      ...filterData,
      filteredProcesses: newFilteredProcesses,
    });
  };

  const handleProcessDelete = (deletedProcessId) => {
    const deletedProcessIndex = filteredProcesses.findIndex(
      (process) => process.process_id === deletedProcessId
    );
    const newFilteredProcessesOne = filteredProcesses.slice(
      0,
      deletedProcessIndex
    );
    const newFilteredProcessesTwo = filteredProcesses.slice(
      deletedProcessIndex + 1
    );
    const newFilteredProcesses = newFilteredProcessesOne.concat(
      newFilteredProcessesTwo
    );
    onFilterChange({
      ...filterData,
      filteredProcesses: newFilteredProcesses,
    });
  };

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12} className={classes.inputSection}>
        <Grid container align="center" justify="center">
          <Grid item xs={12} sm={6}>
            <Box pt={2}>
              <Typography variant="body1" align="center">
                Coffees
              </Typography>
              <AutocompleteWrapperSimple
                fieldName="name"
                options={allCoffees}
                onChange={handleCoffeeAdd}
                shouldShowValueOnChange={false}
                textField={(params) => (
                  <TextField
                    {...params}
                    ref={params.InputProps.ref}
                    InputProps={{
                      classes: {
                        input: classes.resize,
                      },
                    }}
                    className={classes.form}
                    id="coffee"
                    variant="outlined"
                  />
                )}
              />
              <Grid container>
                {filteredCoffees.map((filteredCoffee) => (
                  <Grid key={filteredCoffee?.coffee_id} item sm={4} xs={12}>
                    <Box p={1}>
                      <Chip
                        label={filteredCoffee?.name}
                        onDelete={() =>
                          handleCoffeeDelete(filteredCoffee.coffee_id)
                        }
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box pt={2}>
              <Typography variant="body1" align="center">
                Roasters
              </Typography>
              <AutocompleteWrapperSimple
                fieldName="name"
                options={allRoasters}
                onChange={handleRoasterAdd}
                shouldShowValueOnChange={false}
                textField={(params) => (
                  <TextField
                    {...params}
                    ref={params.InputProps.ref}
                    InputProps={{
                      classes: {
                        input: classes.resize,
                      },
                    }}
                    className={classes.form}
                    id="coffee-roaster"
                    variant="outlined"
                  />
                )}
              />
              <Grid container>
                {filteredRoasters.map((filteredRoaster) => (
                  <Grid key={filteredRoaster?.roaster_id} item xs={12}>
                    <Box p={1}>
                      <Chip
                        label={filteredRoaster?.name}
                        onDelete={() =>
                          handleRoasterDelete(filteredRoaster.roaster_id)
                        }
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box pt={2}>
              <Typography variant="body1" align="center">
                Origins
              </Typography>
              <AutocompleteWrapperSimple
                fieldName="origins"
                options={allOrigins}
                onChange={handleOriginAdd}
                shouldShowValueOnChange={false}
                textField={(params) => (
                  <TextField
                    {...params}
                    ref={params.InputProps.ref}
                    InputProps={{
                      classes: {
                        input: classes.resize,
                      },
                    }}
                    className={classes.form}
                    id="coffee-origin"
                    variant="outlined"
                  />
                )}
              />
              <Grid container>
                {filteredOrigins.map((filteredOrigin) => (
                  <Grid key={filteredOrigin?.origin_id} item sm={4} xs={12}>
                    <Box p={1}>
                      <Chip
                        label={filteredOrigin?.name}
                        onDelete={() =>
                          handleOriginDelete(filteredOrigin.origin_id)
                        }
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box pt={2}>
              <Typography variant="body1" align="center">
                Processes
              </Typography>
              <AutocompleteWrapperSimple
                fieldName="processes"
                options={allProcesses}
                onChange={handleProcessAdd}
                shouldShowValueOnChange={false}
                textField={(params) => (
                  <TextField
                    {...params}
                    ref={params.InputProps.ref}
                    InputProps={{
                      classes: {
                        input: classes.resize,
                      },
                    }}
                    className={classes.form}
                    id="coffee-process"
                    variant="outlined"
                  />
                )}
              />
              <Grid container>
                {filteredProcesses.map((filteredProcess) => (
                  <Grid key={filteredProcess?.process_id} item sm={4} xs={12}>
                    <Box p={1}>
                      <Chip
                        label={filteredProcess?.name}
                        onDelete={() =>
                          handleProcessDelete(filteredProcess.process_id)
                        }
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box pt={4} pb={8}>
          <Button variant="contained" size="large" onClick={handleSubmit}>
            <Typography variant="body1" align="center">
              Update Filters
            </Typography>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

FilterCoffeeEntries.propTypes = filterCoffeeEntriesPropTypesShape;

export default FilterCoffeeEntries;

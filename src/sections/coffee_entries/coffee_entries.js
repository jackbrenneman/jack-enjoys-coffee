/**
 * Multiple Coffee Entries to display.
 */
import React, { useState } from "react";
import PropTypes from "prop-types";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt";
import RefreshIcon from "@material-ui/icons/Refresh";
import FilterListIcon from "@material-ui/icons/FilterList";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
// Custom Components
import CoffeeEntry from "./coffee_entry.js";
import ActiveFilters from "./filter/active_filters.js";
// Constants
import { today, sevenDaysAgo } from "../../consts.js";
import FilterCoffeeEntries from "./filter/filter_coffee_entries.js";
import { CircularProgress } from "@material-ui/core";

function CurrentCoffeeEntries({
  canEdit,
  coffeeEntries,
  currentlyAppliedCoffeeFilters,
  currentlyAppliedRoasterFilters,
  currentlyAppliedOriginFilters,
  currentlyAppliedProcessFilters,
  isLoading,
  onDateChange,
  onFilter,
  onCoffeeEntryDeletion,
  currentData,
}) {
  const useStyles = makeStyles(() => ({
    card: {
      padding: "0",
      background: "dimgrey",
    },
    header: {
      padding: "0",
      paddingTop: "5px",
    },
    content: {
      padding: "0",
      "&:last-child": {
        padding: 0,
      },
      color: "white",
    },
  }));

  const classes = useStyles();
  // State that determines whether or not to show the filter section
  const [showFilter, setShowFilter] = useState(false);
  // State that contains the data for filtering coffee entries
  const [filterData, setFilterData] = useState({
    filteredCoffees: [],
    filteredRoasters: [],
    filteredOrigins: [],
    filteredProcesses: [],
  });
  // State that contains the date entries
  const [currentDates, setCurrentDates] = useState({
    startDate: sevenDaysAgo,
    endDate: today,
  });
  const { startDate, endDate } = currentDates;

  const [currentlyAppliedDates, setCurrentlyAppliedDates] = useState({
    currentlyAppliedStartDate: startDate,
    currentlyAppliedEndDate: endDate,
  });

  const {
    currentlyAppliedStartDate,
    currentlyAppliedEndDate,
  } = currentlyAppliedDates;
  const formattedStartDateObject = new Date(currentlyAppliedStartDate);
  const formattedStartDateString = formattedStartDateObject.toDateString();
  const formattedEndDateObject = new Date(currentlyAppliedEndDate);
  const formattedEndDateString = formattedEndDateObject.toDateString();

  const handleStartDateChange = (e) => {
    const date = e.target.value;
    setCurrentDates({
      ...currentDates,
      startDate: date,
    });
  };

  const handleEndDateChange = (e) => {
    const date = e.target.value;
    setCurrentDates({
      ...currentDates,
      endDate: date,
    });
  };

  const handleToggleFilter = (e) => {
    setShowFilter(!showFilter);
  };

  const handleUpdateDate = () => {
    // TODO: Make sure startDate is before or equal to endDate
    onDateChange(startDate, endDate);
    setCurrentlyAppliedDates({
      currentlyAppliedStartDate: startDate,
      currentlyAppliedEndDate: endDate,
    });
  };

  // When the user actually submits the filters they want to see
  const handleFilterSubmit = () => {
    onFilter(filterData);
  };

  // When the user changes the filters, but hasn't submitted yet
  const handleFilterChange = (newFilterData) => {
    setFilterData(newFilterData);
  };

  const getDateArrowIcon = () => (
    <IconButton
      aria-label="refresh"
      onClick={handleUpdateDate}
      size="small"
      sx={{ color: "white" }}
    >
      <ArrowRightAlt />
    </IconButton>
  );
  return (
    <Grid container align="center" justify="center">
      <Grid item xs={12} sm={3}>
        <Box py={1}>
          <Typography variant="caption" align="center">
            Start
          </Typography>
          <form autoComplete="off">
            <TextField
              id="start_date"
              type="date"
              defaultValue={startDate}
              onChange={handleStartDateChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
              size="small"
            />
          </form>
        </Box>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Box py={1}>
          <Typography variant="caption" align="center">
            End
          </Typography>
          <form autoComplete="off">
            <TextField
              id="end_date"
              type="date"
              defaultValue={endDate}
              onChange={handleEndDateChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
              size="small"
            />
          </form>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box py={1}>
          <IconButton
            aria-label="refresh"
            onClick={handleUpdateDate}
            size="small"
          >
            <RefreshIcon />
          </IconButton>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box py={2}>
          <Divider variant="middle" />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box py={1}>
          <IconButton
            aria-label="refresh"
            onClick={handleToggleFilter}
            size="small"
          >
            <FilterListIcon />
          </IconButton>
        </Box>
      </Grid>
      {showFilter && (
        <FilterCoffeeEntries
          onSubmit={handleFilterSubmit}
          currentData={currentData}
          onFilterChange={handleFilterChange}
          filterData={filterData}
        />
      )}
      <Grid item xs={12}>
        <Box py={2}>
          <Divider variant="middle" />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box pb={4}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Grid container align="center" justify="center">
              <Grid item xs={8}>
                <Box p={1}>
                  <Card raised className={classes.card}>
                    <CardContent className={classes.content}>
                      <CardHeader
                        className={classes.header}
                        titleTypographyProps={{ variant: "caption" }}
                        title={
                          <Typography variant="subtitle1" align="center">
                            Dates Applied
                          </Typography>
                        }
                      />
                      <Typography variant="caption" align="center">
                        {formattedStartDateString} {getDateArrowIcon()}{" "}
                        {formattedEndDateString}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <ActiveFilters
                  currentlyAppliedCoffeeFilters={currentlyAppliedCoffeeFilters}
                  currentlyAppliedRoasterFilters={
                    currentlyAppliedRoasterFilters
                  }
                  currentlyAppliedOriginFilters={currentlyAppliedOriginFilters}
                  currentlyAppliedProcessFilters={
                    currentlyAppliedProcessFilters
                  }
                />
              </Grid>
              {coffeeEntries.map((coffeeEntry) => (
                <Grid item xs={10} sm={3} key={coffeeEntry.coffee_entry_id}>
                  <CoffeeEntry
                    canEdit={canEdit}
                    onCoffeeEntryDeletion={onCoffeeEntryDeletion}
                    coffeeEntry={coffeeEntry}
                    currentData={currentData}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}

CurrentCoffeeEntries.propTypes = {
  canEdit: PropTypes.bool,
  coffeeEntries: PropTypes.array.isRequired,
  currentlyAppliedCoffeeFilters: PropTypes.array,
  currentlyAppliedRoasterFilters: PropTypes.array,
  currentlyAppliedOriginFilters: PropTypes.array,
  currentlyAppliedProcessFilters: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  onDateChange: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
  onCoffeeEntryDeletion: PropTypes.func.isRequired,
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

CurrentCoffeeEntries.defaultProps = {
  canEdit: true,
  currentlyAppliedCoffeeFilters: [],
  currentlyAppliedRoasterFilters: [],
  currentlyAppliedOriginFilters: [],
  currentlyAppliedProcessFilters: [],
};

export default CurrentCoffeeEntries;

/**
 * Multiple Coffee Entries to display.
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Material UI
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import RefreshIcon from '@material-ui/icons/Refresh';
import FilterListIcon from '@material-ui/icons/FilterList';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
// Custom Components
import CoffeeEntry from './coffee_entry.js';
import ActiveFilters from './filter/active_filters.js';
// Constants
import { today, sevenDaysAgo } from '../../consts.js';
import FilterCoffeeEntries from './filter/filter_coffee_entries.js';
import { CircularProgress } from '@material-ui/core';

function CurrentCoffeeEntries({
  canEdit,
  coffeeEntries,
  isLoading,
  onDateChange,
  onFilter,
  onCoffeeEntryDeletion,
  currentData,
}) {
  // State that determines whether or not to show the filter section
  const [showFilter, setShowFilter] = useState(false);
  // State that contains the data for filtering coffee entries
  const [filterData, setFilterData] = useState({
    filteredCoffees: [],
    filteredRoasters: [],
    filteredOrigins: [],
    filteredProcesses: []
  });
  // State that contains the date entries
  const [currentDates, setCurrentDates] = useState({
    startDate: sevenDaysAgo,
    endDate: today,
  });
  const { startDate, endDate } = currentDates;

  const [datesShown, setDatesShown] = useState({
    startDateShown: startDate,
    endDateShown: endDate,
  })

  const { startDateShown, endDateShown } = datesShown;

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

  const handleShowFilter = (e) => {
    setShowFilter(!showFilter);
  };

  const handleUpdateDate = () => {
    // TODO: Make sure startDate is before or equal to endDate
    onDateChange(startDate, endDate);
    setDatesShown({
      startDateShown: startDate,
      endDateShown: endDate,
    });
  };

  const handleFilterSubmit = () => {
    onFilter(filterData);
  };

  // Just determines if there are active filters so we can correctly show the user
  const {filteredCoffees, filteredRoasters, filteredProcesses, filteredOrigins} = filterData;
  const showFiltersActive = filteredCoffees.length || filteredRoasters.length || filteredOrigins.length || filteredProcesses.length;

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
            onClick={handleShowFilter}
            size="small"
          >
            <FilterListIcon />
          </IconButton>
        </Box>
      </Grid>
      {
        showFilter &&
        <FilterCoffeeEntries onSubmit={handleFilterSubmit} currentData={currentData} setFilterData={setFilterData} filterData={filterData} />
      }
      <Grid item xs={12}>
        <Box py={2}>
          <Divider variant="middle" />
        </Box>
      </Grid>
      <Grid item xs={12}>
      {isLoading ? <CircularProgress /> :
        <Grid container align="center" justify="center">
          <Grid item xs={12}>
            <Typography variant="body1" align="center">
              Date Range
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" align="center">
              {startDateShown} ---- {endDateShown}
            </Typography>
          </Grid>
          {
            !!showFiltersActive &&
              <>
                <Grid item xs={12}>
                  <Typography variant="body1" align="center">
                    Filters Applied
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <ActiveFilters filterData={filterData} />
                </Grid>
              </>
          }
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
        </Grid>}
      </Grid>
    </Grid>
  );
}

CurrentCoffeeEntries.propTypes = {
  canEdit: PropTypes.bool,
  coffeeEntries: PropTypes.array.isRequired,
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
};

export default CurrentCoffeeEntries;

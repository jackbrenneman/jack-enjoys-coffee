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
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Divider from '@material-ui/core/Divider';
// Queries and Fetching
import { currentDataQuery } from '../../graphql/queries/data_entry_queries.js';
import { queryGQL } from '../../graphql/fetch.js';
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

function DataEntryContainer({ user }) {
  // State used for determining which data entry component to show.
  const [dataEntry, setDataEntry] = useState(dataEntryDefault);

  // State that basically contains all the current info
  const [currentData, setCurrentData] = useState(currentDataDefault);

  // State used for popping toast message for when write is successful or not
  const [toast, setToast] = useState({
    open: false,
    severity: 'success',
    message: '',
  });

  const useStyles = makeStyles((theme) => ({
    page: {
      backgroundColor: '#EEEEEE',
      minHeight: '100vh',
    },
    radio: {
      padding: '2px',
    },
    navLink: {
      textDecoration: 'none',
    },
  }));

  const classes = useStyles();

  // When the component renders, we fetch all the current data
  useEffect(() => {
    if (user?.user_id) {
      queryGQL(currentDataQuery(user.user_id))
        .then(({ data }) => {
          if (data) {
            setCurrentData(data);
          }
        })
        .catch((e) => {
          // TODO: Determine what to do if fetch is unsuccessful
          console.log(e);
        });
    }
  }, [user]);

  const handleDataOptionChange = (e) => {
    setDataEntry({
      ...dataEntry,
      dataOption: e.target.value,
    });
  };

  const handleToastClose = () => {
    setToast({
      ...toast,
      open: false,
    });
  };

  const { dataOption } = dataEntry;
  const { open, severity, message } = toast;
  const dataEntryFormProps = {
    currentData,
    dataEntry,
    setCurrentData,
    setDataEntry,
    setToast,
  };

  const getDataEntryForm = () => {
    switch (dataOption) {
      case brewerEnum:
        return <NewBrewerInput {...dataEntryFormProps} />;
      case coffeeEnum:
        return <NewCoffeeInput {...dataEntryFormProps} />;
      case drinkEnum:
        return <NewDrinkInput {...dataEntryFormProps} />;
      case grinderEnum:
        return <NewGrinderInput {...dataEntryFormProps} />;
      case originEnum:
        return <NewOriginInput {...dataEntryFormProps} />;
      case roasterEnum:
        return <NewRoasterInput {...dataEntryFormProps} />;
      case waterEnum:
        return <NewWaterInput {...dataEntryFormProps} />;
      default:
        return <div />;
    }
  };

  return (
    <Box className={classes.page}>
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
                              Brewer
                            </Typography>
                          }
                          labelPlacement="bottom"
                        />
                        <FormControlLabel
                          value={coffeeEnum}
                          control={<Radio className={classes.radio} />}
                          label={
                            <Typography variant="caption" align="center">
                              Coffee
                            </Typography>
                          }
                          labelPlacement="bottom"
                        />
                        <FormControlLabel
                          value={drinkEnum}
                          control={<Radio className={classes.radio} />}
                          label={
                            <Typography variant="caption" align="center">
                              Drink
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
                              Grinder
                            </Typography>
                          }
                          labelPlacement="bottom"
                        />
                        <FormControlLabel
                          value={originEnum}
                          control={<Radio className={classes.radio} />}
                          label={
                            <Typography variant="caption" align="center">
                              Origin
                            </Typography>
                          }
                          labelPlacement="bottom"
                        />
                        <FormControlLabel
                          value={roasterEnum}
                          control={<Radio className={classes.radio} />}
                          label={
                            <Typography variant="caption" align="center">
                              Roaster
                            </Typography>
                          }
                          labelPlacement="bottom"
                        />
                        <FormControlLabel
                          value={waterEnum}
                          control={<Radio className={classes.radio} />}
                          label={
                            <Typography variant="caption" align="center">
                              Water
                            </Typography>
                          }
                          labelPlacement="bottom"
                        />
                      </Grid>
                    </Grid>
                  </RadioGroup>
                </FormControl>
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
              {getDataEntryForm()}
            </Grid>
          </Grid>
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleToastClose}
          >
            <Alert onClose={handleToastClose} severity={severity}>
              <Typography variant="body1">{message}</Typography>
            </Alert>
          </Snackbar>
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

DataEntryContainer.propTypes = {
  user: PropTypes.object,
};

DataEntryContainer.defaultProps = {
  user: {},
};

export default DataEntryContainer;

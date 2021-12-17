/**
 * Filters that are currently active for the shown coffee entries
 */
 import React from 'react';
 import PropTypes from 'prop-types';
 // Material UI
 import { makeStyles } from '@material-ui/core/styles';
 import Box from '@material-ui/core/Box';
 import Typography from '@material-ui/core/Typography';
 import Chip from '@material-ui/core/Chip';
 import Grid from '@material-ui/core/Grid';
 import CardHeader from '@material-ui/core/CardHeader';
 import Card from '@material-ui/core/Card';
 import CardContent from '@material-ui/core/CardContent';
 import { coffeeEnum, originEnum, processEnum, roasterEnum } from '../../../consts';

 function ActiveFilters({
  currentlyAppliedCoffeeFilters,
  currentlyAppliedRoasterFilters,
  currentlyAppliedOriginFilters,
  currentlyAppliedProcessFilters,
 }) {
  const useStyles = makeStyles(() => ({
    card: {
      padding: '0',
      background: 'darkgrey',
    },
    header: {
      padding: '0',
      paddingTop: '5px',
    },
    content: {
      padding: '0',
      '&:last-child': {
        padding: 0,
      },
    },
  }));

  const classes = useStyles();

  const getTitle = (filterEnum) => {
    switch (filterEnum) {
      case coffeeEnum:
        return <Typography variant="subtitle1">Coffee Filters Applied</Typography>;
      case roasterEnum:
        return <Typography variant="subtitle1">Roaster Filters Applied</Typography>;
      case originEnum:
        return <Typography variant="subtitle1">Origin Filters Applied</Typography>;
      case processEnum:
        return <Typography variant="subtitle1">Process Filters Applied</Typography>;
      default:
        return <Typography variant="subtitle1">Filters</Typography>
    }
  }

   return (
     <Grid container direction="row" justify="center" alignItems="center">
       {!!currentlyAppliedCoffeeFilters.length &&
        <Grid item xs={11} sm={5}>
          <Box p={1}>
            <Card raised className={classes.card}>
              <CardContent className={classes.content}>
                <CardHeader
                  className={classes.header}
                  titleTypographyProps={{ variant: 'caption' }}
                  title={getTitle(coffeeEnum)}
                />
                <Grid container justify="center">
                  {currentlyAppliedCoffeeFilters.map(filteredCoffee =>
                    <Grid key={filteredCoffee?.coffee_id} item sm={4} xs={6}>
                      <Box p={1}>
                        <Chip label={filteredCoffee?.name} />
                      </Box>
                    </Grid>
                  )}
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Grid>
       }
       {!!currentlyAppliedRoasterFilters.length &&
        <Grid item xs={11} sm={5}>
          <Box p={1}>
            <Card raised className={classes.card}>
              <CardContent className={classes.content}>
                <CardHeader
                  className={classes.header}
                  titleTypographyProps={{ variant: 'caption' }}
                  title={getTitle(roasterEnum)}
                />
                <Grid container justify="center">
                  {currentlyAppliedRoasterFilters.map(filteredRoaster =>
                    <Grid key={filteredRoaster?.roaster_id} item sm={4} xs={6}>
                      <Box p={1}>
                        <Chip label={filteredRoaster?.name} />
                      </Box>
                    </Grid>
                  )}
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Grid>
       }
       {!!currentlyAppliedOriginFilters.length &&
        <Grid item xs={11} sm={5}>
          <Box p={1}>
            <Card raised className={classes.card}>
              <CardContent className={classes.content}>
                <CardHeader
                  className={classes.header}
                  titleTypographyProps={{ variant: 'caption' }}
                  title={getTitle(originEnum)}
                />
                <Grid container justify="center">
                  {currentlyAppliedOriginFilters.map(filteredOrigin =>
                    <Grid key={filteredOrigin?.origin_id} item sm={4} xs={6}>
                      <Box p={1}>
                        <Chip label={filteredOrigin?.name} />
                      </Box>
                    </Grid>
                  )}
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Grid>
       }
       {!!currentlyAppliedProcessFilters.length &&
        <Grid item xs={11} sm={5}>
          <Box p={1}>
            <Card raised className={classes.card}>
              <CardContent className={classes.content}>
                <CardHeader
                  className={classes.header}
                  titleTypographyProps={{ variant: 'caption' }}
                  title={getTitle(originEnum)}
                />
                <Grid container justify="center">
                  {currentlyAppliedProcessFilters.map(filteredProcess =>
                    <Grid key={filteredProcess?.process_id} item xs={3}>
                      <Box p={1}>
                        <Chip label={filteredProcess?.name} />
                      </Box>
                    </Grid>
                  )}
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Grid>
       }
     </Grid>
   );
 }

 ActiveFilters.propTypes = {
    currentlyAppliedCoffeeFilters: PropTypes.array,
    currentlyAppliedRoasterFilters: PropTypes.array,
    currentlyAppliedOriginFilters: PropTypes.array,
    currentlyAppliedProcessFilters: PropTypes.array,
 };

 ActiveFilters.defaultProps = {
  currentlyAppliedCoffeeFilters: [],
  currentlyAppliedRoasterFilters: [],
  currentlyAppliedOriginFilters: [],
  currentlyAppliedProcessFilters: [],
};

 export default ActiveFilters;

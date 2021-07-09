/**
 * The Stats for a user.
 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
// Queries and Fetching
import { userStatsQuery } from '../../../graphql/queries/user_queries.js';
import { queryGQL } from '../../../graphql/fetch.js';
// Custom Components
import MethodStats from './method_stats.js';

const millisecondsInOneDay = 1000 * 60 * 60 * 24;

function Stats({ user }) {
  const { user_id } = user;
  const useStyles = makeStyles((theme) => ({
    page: {
      backgroundColor: '#EEEEEE',
      minHeight: '100vh',
    },
    section: {
      maxWidth: '800px',
    },
  }));

  const [stats, setStats] = useState(null);

  // When the component renders, we fetch all the stats for the user
  useEffect(() => {
    if (user_id) {
      queryGQL(userStatsQuery(user_id))
        .then(({ data }) => {
          if (data?.user?.stats) {
            setStats(data.user.stats);
          }
        })
        .catch((e) => {
          // TODO: Determine what to do if fetch is unsuccessful
          console.log(e);
        });
    }
  }, [user_id]);

  const classes = useStyles();

  const getAverageCoffeeConsumption = () => {
    const { start_date = null, total_coffee_entries = null } = stats;
    if (start_date && total_coffee_entries) {
      const startDate = start_date ? new Date(start_date) : null;
      const localeStartDate = startDate.toLocaleDateString('en-US', {
        timeZone: 'UTC',
      });
      const today = new Date();
      const localeToday = today.toLocaleDateString('en-US', {
        timeZone: 'UTC',
      });
      const daysBetweenStartAndNow =
        (new Date(localeToday) - new Date(localeStartDate)) /
        millisecondsInOneDay;
      return (total_coffee_entries / daysBetweenStartAndNow).toFixed(1);
    }
    return 0;
  };

  const getMethodStats = () => {
    const { method_stats } = stats;
    const { espresso_stats, pour_over_stats, immersion_stats } = method_stats;
    return [
      {
        stats: {
          ...espresso_stats,
          total_coffee_in: espresso_stats?.total_espresso_coffee_in,
          total_count: espresso_stats?.total_espresso_count,
        },
      },
      {
        stats: {
          ...pour_over_stats,
          total_coffee_in: pour_over_stats?.total_pour_over_coffee_in,
          total_count: pour_over_stats?.total_pour_over_count,
        },
      },
      {
        stats: {
          ...immersion_stats,
          total_coffee_in: immersion_stats?.total_immersion_coffee_in,
          total_count: immersion_stats?.total_immersion_count,
        },
      },
    ];
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.page}
    >
      <Grid item xs={12}>
        <Box py={1}>
          <Typography variant="h5">Stats</Typography>
        </Box>
      </Grid>
      {stats ? (
        <Grid item xs={12}>
          <Grid container direction="column" alignItems="center">
            <Typography variant="caption">
              Total Coffee Entries: {stats?.total_coffee_entries}
            </Typography>
            <Typography variant="caption">
              Total Coffee Brewed: {stats?.total_coffee_in / 1000}kg
            </Typography>
            <Typography variant="caption">
              # of Unique Coffees: {stats?.total_unique_coffees}
            </Typography>
            <Typography variant="caption">
              # of Unique Roasters: {stats?.total_unique_roasters}
            </Typography>
            <Typography variant="caption">
              Average Coffee Consumption: {getAverageCoffeeConsumption()}{' '}
              drinks/day
            </Typography>
          </Grid>
          <Grid container align="center" justify="center">
            {getMethodStats().map(({ stats }, index) => (
              <Grid item xs={10} key={index}>
                <MethodStats methodStats={stats} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </Grid>
  );
}

Stats.propTypes = {
  user: PropTypes.object,
};

Stats.defaultProps = {
  user: {},
};

export default Stats;

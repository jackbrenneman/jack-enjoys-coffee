/**
 * The Method Breakdwon Stats for a user.
 */
import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// Custom Components
import DrinkBreakdownStats from './drink_breakdown_stats';

function MethodBreakdownStats({ methodStats }) {
  const { total_coffee_in, total_count, drink_breakdown, method } = methodStats;
  const { name: methodName } = method;

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <Box pt={4} pb={2}>
          <Typography variant="h6">{methodName} Breakdown</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box>
          <Typography variant="caption">
            Total Coffee Used: {total_coffee_in} grams
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption">
            Total # of drinks: {total_count}
          </Typography>
        </Box>
        {drink_breakdown.map((drinkStats, index) => (
          <DrinkBreakdownStats key={index} drinkStats={drinkStats} />
        ))}
      </Grid>
    </Grid>
  );
}

MethodBreakdownStats.propTypes = {
  methodStats: PropTypes.shape({
    total_coffee_in: PropTypes.number,
    total_count: PropTypes.number,
    method: PropTypes.shape({
      method_id: PropTypes.number,
      name: PropTypes.string,
    }),
    drink_breakdown: PropTypes.arrayOf(
      PropTypes.shape({
        drink: PropTypes.shape({
          drink_id: PropTypes.number,
          name: PropTypes.string,
        }),
        total_coffee_in: PropTypes.number,
        total_count: PropTypes.number,
      })
    ),
  }),
};

MethodBreakdownStats.defaultProps = {
  methodStats: {},
};

export default MethodBreakdownStats;

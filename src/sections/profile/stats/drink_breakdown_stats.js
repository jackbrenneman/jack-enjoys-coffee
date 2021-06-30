/**
 * The Drink Breakdwon Stats for a user.
 */
import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

function DrinkBreakdownStats({ drinkStats }) {
  const { total_coffee_in, total_count, drink } = drinkStats;
  const { name: drinkName } = drink;

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <Box py={1}>
          <Typography variant="body1">{drinkName}</Typography>
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
      </Grid>
    </Grid>
  );
}

DrinkBreakdownStats.propTypes = {
  drinkStats: PropTypes.shape({
    drink: PropTypes.shape({
      drink_id: PropTypes.number,
      name: PropTypes.string,
      method: PropTypes.shape({
        method_id: PropTypes.number,
        name: PropTypes.string,
      }),
    }),
    total_coffee_in: PropTypes.number,
    total_count: PropTypes.number,
  }),
};

DrinkBreakdownStats.defaultProps = {
  drinkStats: {},
};

export default DrinkBreakdownStats;

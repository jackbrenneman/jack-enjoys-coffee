/**
 * The Drink Stats for a user.
 */
import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(() => ({
  card: {
    padding: '0',
    backgroundColor: '#EEEEEE',
  },
  header: {
    padding: '0',
    paddingTop: '4px',
  },
  content: {
    padding: '0',
    '&:last-child': {
      padding: 0,
    },
  },
}));

function DrinkStats({ drinkStats }) {
  const { total_coffee_in, total_count, drink } = drinkStats;
  const { name: drinkName } = drink;

  const classes = useStyles();

  return (
    <Box py={1}>
      <Card raised variant="outlined" className={classes.card}>
        <CardContent className={classes.content}>
          <CardHeader
            className={classes.header}
            titleTypographyProps={{ variant: 'body1' }}
            title={drinkName}
          />
          <Grid
            direction="column"
            container
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="caption">
              Total Coffee Used: {total_coffee_in}g
            </Typography>
            <Typography variant="caption">
              Total Drinks: {total_count}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

DrinkStats.propTypes = {
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

DrinkStats.defaultProps = {
  drinkStats: {},
};

export default DrinkStats;

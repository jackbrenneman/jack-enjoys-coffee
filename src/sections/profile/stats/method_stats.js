/**
 * The Method Stats for a user.
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
// Custom Components
import DrinkStats from './drink_stats';

const useStyles = makeStyles(() => ({
  card: {
    padding: '0',
  },
  header: {
    padding: '0',
    paddingTop: '10px',
  },
  content: {
    padding: '0',
    '&:last-child': {
      padding: 0,
    },
  },
}));

function MethodStats({ methodStats }) {
  const { drink_stats, method, total_coffee_in, total_count } = methodStats;
  const { name: methodName } = method;

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleMoreDetailsClick = (e) => {
    setOpen(!open);
  };

  return (
    <Box py={1}>
      <Card raised className={classes.card}>
        <CardContent className={classes.content}>
          <CardHeader
            className={classes.header}
            titleTypographyProps={{ variant: 'h6' }}
            title={`${methodName} Stats`}
          />
          <Grid
            direction="column"
            container
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="caption" align="center">
              Total Coffee Brewed: {total_coffee_in}g
            </Typography>
            <Typography variant="caption">
              Total Drinks: {total_count}
            </Typography>
            <Grid item>
              <Box px={1}>
                <IconButton
                  aria-label="more"
                  onClick={handleMoreDetailsClick}
                  size="small"
                >
                  <MoreHorizIcon />
                </IconButton>
              </Box>
            </Grid>
            {open && (
              <Grid item xs={12}>
                <Grid container align="center" justify="center">
                  {drink_stats.map((drinkStats, index) => (
                    <Grid item xs={10} lg={4} key={index}>
                      <DrinkStats drinkStats={drinkStats} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            )}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

MethodStats.propTypes = {
  methodStats: PropTypes.shape({
    total_coffee_in: PropTypes.number,
    total_count: PropTypes.number,
    method: PropTypes.shape({
      method_id: PropTypes.number,
      name: PropTypes.string,
    }),
    drink_stats: PropTypes.arrayOf(
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

MethodStats.defaultProps = {
  methodStats: {},
};

export default MethodStats;

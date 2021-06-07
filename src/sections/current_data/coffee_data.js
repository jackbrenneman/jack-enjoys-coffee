/**
 * Coffee Data. Shows all coffees stored in the DB
 */
import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  coffeeSection: {
    backgroundColor: 'grey',
  },
}));

function CoffeeRow(props) {
  const classes = useStyles();
  const { coffee } = props;
  const { name, origin, process, roaster } = coffee;
  const { name: originName } = origin;
  const { name: processName } = process;
  const { name: roasterName } = roaster;
  return (
    <Box my={1} py={1} className={classes.coffeeSection}>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="caption">{name}</Typography>
          <Typography variant="caption">{roasterName}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="caption">{originName}</Typography>
          <Typography variant="caption">{processName}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

CoffeeRow.propTypes = {
  coffee: PropTypes.shape({
    coffee_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    roaster: PropTypes.object,
    origin: PropTypes.object,
    process: PropTypes.object,
  }).isRequired,
};

function CoffeeData({ coffees }) {
  return (
    <Box pb={2}>
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <Box p={2}>
            <Typography variant="h6">Coffees</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container align="center" justify="center">
            <Grid item xs={11}>
              {coffees.map((coffee) => (
                <CoffeeRow key={coffee.coffee_id} coffee={coffee} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

CoffeeData.propTypes = {
  coffees: PropTypes.array.isRequired,
};

export default CoffeeData;

/**
 * The Drink Stats for a user.
 */
import React from "react";
import PropTypes from "prop-types";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(() => ({
  card: {
    padding: "0",
    backgroundColor: "#EEEEEE",
    minWidth: "170px",
  },
  header: {
    padding: "0",
    paddingTop: "4px",
  },
  divider: {
    minWidth: "150px",
  },
  content: {
    padding: "0",
    "&:last-child": {
      padding: 0,
    },
  },
}));

function DrinkStats({ drinkStats }) {
  const {
    total_coffee_in,
    total_count,
    drink,
    total_espresso_liquid_out,
    total_water_in,
    total_steep_time,
  } = drinkStats;
  const { name: drinkName } = drink;

  const classes = useStyles();

  return (
    <Box p={1}>
      <Card raised variant="outlined" className={classes.card}>
        <CardContent className={classes.content}>
          <CardHeader
            className={classes.header}
            titleTypographyProps={{ variant: "body2" }}
            title={drinkName}
          />
          <Grid
            direction="column"
            container
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={12} className={classes.divider}>
              <Divider />
            </Grid>
            {!!total_count && (
              <Typography variant="caption">
                Drink Count: {total_count}
              </Typography>
            )}
            {!!total_coffee_in && (
              <Typography variant="caption">
                Total Coffee Used: {total_coffee_in}g
              </Typography>
            )}
            {!!total_espresso_liquid_out && (
              <Typography variant="caption">
                Total Espresso Made: {total_espresso_liquid_out}g
              </Typography>
            )}
            {!!total_water_in && (
              <Typography variant="caption">
                Total Water Used: {total_water_in / 1000}L
              </Typography>
            )}
            {!!total_steep_time && (
              <Typography variant="caption">
                Total Steep Time: {total_steep_time}s
              </Typography>
            )}
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

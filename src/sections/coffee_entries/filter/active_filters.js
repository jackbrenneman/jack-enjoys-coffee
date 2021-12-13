/**
 * Filters that are currently active for the shown coffee entries
 */
 import React from 'react';
 import PropTypes from 'prop-types';
 // Material UI
 import Box from '@material-ui/core/Box';
 import Typography from '@material-ui/core/Typography';
 import Chip from '@material-ui/core/Chip';
 import Grid from '@material-ui/core/Grid';

 function ActiveFilters({
   filterData,
 }) {
   const {filteredCoffees, filteredRoasters, filteredOrigins, filteredProcesses} = filterData;

   return (
     <Grid container direction="row" justify="center" alignItems="center">
       {!!filteredCoffees.length &&
         <Grid item xs={12} sm={6}>
           <Grid container justify="center">
            <Grid item xs={12}>
              <Typography variant="caption" align="center">
                Coffees
              </Typography>
            </Grid>
            {filteredCoffees.map(filteredCoffee =>
              <Grid key={filteredCoffee?.coffee_id} item sm={4} xs={12}>
                <Box p={1}>
                  <Chip label={filteredCoffee?.name} />
                </Box>
              </Grid>
            )}
           </Grid>
         </Grid>
       }
       {!!filteredRoasters.length &&
        <Grid item xs={12} sm={6}>
          <Grid container justify="center">
            <Grid item xs={12}>
              <Typography variant="caption" align="center">
                Roasters
              </Typography>
            </Grid>
            {filteredRoasters.map(filteredRoaster =>
              <Grid key={filteredRoaster?.roaster_id} item sm={4} xs={12}>
                <Box p={1}>
                  <Chip label={filteredRoaster?.name} />
                </Box>
              </Grid>
            )}
          </Grid>
        </Grid>
       }
       {!!filteredOrigins.length &&
        <Grid item xs={12} sm={6}>
          <Grid container justify="center">
              <Grid item xs={12}>
                <Typography variant="caption" align="center">
                  Origins
                </Typography>
              </Grid>
            {filteredOrigins.map(filteredOrigin =>
              <Grid key={filteredOrigin?.origin_id} item sm={4} xs={12}>
                <Box p={1}>
                  <Chip label={filteredOrigin?.name} />
                </Box>
              </Grid>
            )}
          </Grid>
        </Grid>
       }
       {!!filteredProcesses.length &&
        <Grid container justify="center">
          <Grid item xs={12}>
            <Typography variant="caption" align="center">
              Processes
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            {filteredProcesses.map(filteredProcess =>
              <Grid key={filteredProcess?.process_id} item sm={4} xs={12}>
                <Box p={1}>
                  <Chip label={filteredProcess?.name} />
                </Box>
              </Grid>
            )}
          </Grid>
        </Grid>
       }
     </Grid>
   );
 }

 ActiveFilters.propTypes = {
   filterData: PropTypes.shape({
     filteredCoffees: PropTypes.array,
     filteredRoasters: PropTypes.array,
     filteredOrigins: PropTypes.array,
     filteredProcesses: PropTypes.array,
   }).isRequired
 };

 export default ActiveFilters;

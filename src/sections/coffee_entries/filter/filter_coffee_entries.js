/**
 * Filter coffee entries
 */
 import React from 'react';
 // Material UI
 import { makeStyles } from '@material-ui/core/styles';
 import Box from '@material-ui/core/Box';
 import Button from '@material-ui/core/Button';
 import Grid from '@material-ui/core/Grid';
 import TextField from '@material-ui/core/TextField';
 import MenuItem from '@material-ui/core/MenuItem';
 import Typography from '@material-ui/core/Typography';
 import AutocompleteWrapperSimple from '../../coffee_entry/helpers/autocomplete_container_simple.js';
 // Constants
 import { filterCoffeeEntriesPropTypesShape } from '../../../consts.js';

 function FilterCoffeeEntries({
   onSubmit,
   currentData,
   dataEntry,
   setDataEntry,
 }) {
   const { coffee } = dataEntry;
   const { process_id } = coffee;
   const useStyles = makeStyles(() => ({
     inputSection: {
       maxWidth: '600px',
     },
     form: {
       width: '200px',
     },
     resize: {
       fontSize: 16,
       textAlign: 'center',
     },
   }));

   const classes = useStyles();

   const {
     coffees: currentCoffees,
     origins: currentOrigins,
     processes: currentProcesses,
     roasters: currentRoasters,
   } = currentData;

   const handleRoasterIdChange = (roaster) => {
     setDataEntry({
       ...dataEntry,
       coffee: {
         ...coffee,
         roaster_id: parseInt(roaster.roaster_id),
       },
     });
   };

   const handleOriginIdChange = (origin) => {
     setDataEntry({
       ...dataEntry,
       coffee: {
         ...coffee,
         origin_id: parseInt(origin.origin_id),
       },
     });
   };

   const handleProcessIdChange = (e) => {
     setDataEntry({
       ...dataEntry,
       coffee: {
         ...coffee,
         process_id: parseInt(e.target.value),
       },
     });
   };

   return (
     <Grid container direction="column" alignItems="center">
       <Grid item xs={12} className={classes.inputSection}>
         <Grid container align="center" justify="center">
           <Grid item xs={12} sm={6}>
             <Box pt={2}>
               <Typography variant="body1" align="center">
                 Roaster
               </Typography>
               <AutocompleteWrapperSimple
                 fieldName="name"
                 options={currentRoasters}
                 onChange={handleRoasterIdChange}
                 textField={(params) => (
                   <TextField
                     {...params}
                     ref={params.InputProps.ref}
                     InputProps={{
                       classes: {
                         input: classes.resize,
                       },
                     }}
                     className={classes.form}
                     id="coffee-roaster"
                     variant="outlined"
                   />
                 )}
               />
             </Box>
           </Grid>
           <Grid item xs={12} sm={6}>
             <Box pt={2}>
               <Typography variant="body1" align="center">
                 Origin
               </Typography>
               <AutocompleteWrapperSimple
                 fieldName="name"
                 options={currentOrigins}
                 onChange={handleOriginIdChange}
                 textField={(params) => (
                   <TextField
                     {...params}
                     ref={params.InputProps.ref}
                     InputProps={{
                       classes: {
                         input: classes.resize,
                       },
                     }}
                     className={classes.form}
                     id="coffee-origin"
                     variant="outlined"
                   />
                 )}
               />
             </Box>
           </Grid>
           <Grid item xs={12} sm={6}>
             <Box pt={2}>
               <Typography variant="body1" align="center">
                 Process
               </Typography>
               <form autoComplete="off">
                 <TextField
                   className={classes.form}
                   id="coffee-process"
                   select
                   value={process_id}
                   onChange={handleProcessIdChange}
                   variant="outlined"
                   InputProps={{
                     classes: {
                       input: classes.resize,
                     },
                   }}
                 >
                   {currentProcesses.map(({ name, process_id }) => (
                     <MenuItem value={process_id} key={name}>
                       {name}
                     </MenuItem>
                   ))}
                 </TextField>
               </form>
             </Box>
           </Grid>
         </Grid>
       </Grid>
       <Grid item xs={12}>
         <Box pt={4} pb={8}>
           <Button variant="contained" size="large" onClick={onSubmit}>
             <Typography variant="body1" align="center">
               Submit
             </Typography>
           </Button>
         </Box>
       </Grid>
     </Grid>
   );
 }

 FilterCoffeeEntries.propTypes = filterCoffeeEntriesPropTypesShape;

 export default FilterCoffeeEntries;

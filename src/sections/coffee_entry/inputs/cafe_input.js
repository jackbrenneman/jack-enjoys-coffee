/**
 * The Cafe Info for a Coffee Entry.
 */
 import React, { useState } from 'react';
 import PropTypes from 'prop-types';
 // Material UI
 import { makeStyles } from '@material-ui/core/styles';
 import Typography from '@material-ui/core/Typography';
 import Box from '@material-ui/core/Box';
 import Grid from '@material-ui/core/Grid';
 import Card from '@material-ui/core/Card';
 import CardContent from '@material-ui/core/CardContent';
 import TextField from '@material-ui/core/TextField';
 import AutocompleteWrapperSimple from '../helpers/autocomplete_container_simple.js';
 import ExpandLessIcon from '@material-ui/icons/ExpandLess';
 import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
 // Custom Components
 import IconButton from '@material-ui/core/IconButton';
 import Divider from '@material-ui/core/Divider';
 // Constants
 import { coffeeEntryPropTypesShape } from '../../../consts.js';

 function CafeInput({
   coffeeEntry,
   setCoffeeEntry,
   cafes,
 }) {
   const useStyles = makeStyles(() => ({
     card: {
       padding: '0',
     },
     content: {
       padding: '0',
       '&:last-child': {
         padding: 0,
       },
     },
     form: {
       width: '200px',
     },
     accordion: {
       width: '250px',
     },
     paper: {
       width: '150px',
       padding: '5px',
       backgroundColor: '#EEEEEE',
     },
     name: {
       fontWeight: 'bold',
     },
     resize: {
       fontSize: 14,
       textAlign: 'center',
     },
     resizeSmall: {
       fontSize: 12,
       textAlign: 'center',
     },
   }));

   const classes = useStyles();

   const [open, setOpen] = useState(false);

   const handleMoreDetailsClick = (e) => {
     setOpen(!open);
   };

   // State used for the selection of coffee so we can show the user info about it
   const [selectedCafe, setSelectedCafe] = useState(null);

   const handleCafeChange = (selectedCafe) => {
     // Check if the user unselected the cafe first
     if (!selectedCafe) {
       // If so, unset all the fields under coffee
       setCoffeeEntry({
         ...coffeeEntry,
         cafe_id: null,
       });
       setSelectedCafe(null);
       return;
     }
     // Otherwise, populate data with the correct info on the coffee selected
     const { cafe_id } = selectedCafe;
     setCoffeeEntry({
       ...coffeeEntry,
       cafe_id: parseInt(cafe_id),
     });
     setSelectedCafe(selectedCafe);
   };

   return (
     <Grid container justify="center">
       <Grid item xs={12}>
         <Grid container align="center" justify="center">
           <Grid item xs={12}>
             <Typography variant="caption" align="center">
               Cafe Name
             </Typography>
             <AutocompleteWrapperSimple
               fieldName="name"
               options={cafes}
               onChange={handleCafeChange}
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
                   id="cafe"
                   variant="outlined"
                 />
               )}
             />
           </Grid>
           <Grid item xs={12}>
             <Box px={1}>
               <IconButton
                 aria-label="more"
                 onClick={handleMoreDetailsClick}
                 size="small"
                 disabled={!selectedCafe}
               >
                 {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
               </IconButton>
             </Box>
           </Grid>
           {open && (
             <Grid item xs={10}>
               <Card raised className={classes.card}>
                 <CardContent className={classes.content}>
                   <Grid
                     direction="row"
                     container
                     justify="center"
                     alignItems="center"
                   >
                     <Grid item>
                       <Box px={2}>
                         <Typography variant="caption" className={classes.name}>
                           {selectedCafe?.city}
                         </Typography>
                       </Box>
                     </Grid>
                   </Grid>
                   <Grid
                     direction="row"
                     container
                     justify="center"
                     alignItems="center"
                   >
                     <Grid item>
                       <Box px={2}>
                         <Typography variant="caption" className={classes.name}>
                           {selectedCafe?.state}
                         </Typography>
                       </Box>
                     </Grid>
                   </Grid>
                   <Grid
                     direction="row"
                     container
                     justify="center"
                     alignItems="center"
                   >
                     <Grid item>
                       <Box px={2}>
                         <Typography variant="caption" color="textSecondary">
                           {selectedCafe?.country}
                         </Typography>
                       </Box>
                     </Grid>
                   </Grid>
                 </CardContent>
               </Card>
             </Grid>
           )}
         </Grid>
       </Grid>
       <Grid item xs={12}>
         <Box py={2}>
           <Divider variant="middle" />
         </Box>
       </Grid>
     </Grid>
   );
 }

 CafeInput.propTypes = {
   ...coffeeEntryPropTypesShape,
   cafes: PropTypes.array.isRequired,
 };

 export default CafeInput;

/**
 * A new cafe input, allowing the user to write to the DB
 */
 import React from 'react';
 // Material UI
 import { makeStyles } from '@material-ui/core/styles';
 import Box from '@material-ui/core/Box';
 import Button from '@material-ui/core/Button';
 import Grid from '@material-ui/core/Grid';
 import TextField from '@material-ui/core/TextField';
 import Typography from '@material-ui/core/Typography';
 // Queries and Fetching
 import { cafeMutation } from '../../graphql/mutations/cafe_gql_mutations.js';
 import { writeGQL } from '../../graphql/fetch.js';
 // Constants
 import { newInputPropTypesShape } from '../../consts.js';

 function NewCafeInput({
   currentData,
   dataEntry,
   setCurrentData,
   setDataEntry,
   setToast,
 }) {
   const { cafe } = dataEntry;
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

   const { cafes: currentCafes } = currentData;

   const handleNameChange = (e) => {
     setDataEntry({
       ...dataEntry,
       cafe: {
         ...cafe,
         name: e.target.value,
       },
     });
   };

   const handleCityChange = (e) => {
     setDataEntry({
       ...dataEntry,
       cafe: {
         ...cafe,
         city: e.target.value,
       },
     });
   };

   const handleStateChange = (e) => {
     setDataEntry({
       ...dataEntry,
       cafe: {
         ...cafe,
         state: e.target.value,
       },
     });
   };

   const handleCountryChange = (e) => {
     setDataEntry({
       ...dataEntry,
       cafe: {
         ...cafe,
         country: e.target.value,
       },
     });
   };

   const handleWebsiteChange = (e) => {
     setDataEntry({
       ...dataEntry,
       cafe: {
         ...cafe,
         website: e.target.value,
       },
     });
   };

   const handleSubmit = () => {
     const alreadyThere = currentCafes.find(
       ({ name }) => cafe.name === name
     );
     if (alreadyThere) {
       // Let user know this cafe already exists and return
       setToast({
         open: true,
         severity: 'warning',
         message: 'This cafe name already exists',
       });
       return;
     }
     writeGQL(cafeMutation, { cafe: cafe })
       .then(({ data }) => {
         const { cafe: newCafe } = data;
         if (newCafe.cafe_id) {
           // Write was successful, let user know, update state and return
           setToast({
             open: true,
             severity: 'success',
             message: 'New Cafe Added!',
           });
           setCurrentData({
             ...currentData,
             cafes: currentCafes.concat([newCafe]),
           });
           return;
         }
         // Write was not successful, let user know and return
         setToast({
           open: true,
           severity: 'error',
           message: 'Something went wrong...please try again',
         });
       })
       .catch((e) => {
         setToast({
           open: true,
           severity: 'error',
           message: 'Something went wrong...please try again',
         });
         console.log(e);
       });
     return;
   };

   return (
     <Grid container direction="column" alignItems="center">
       <Grid item xs={12} className={classes.inputSection}>
         <Grid container align="center" justify="center">
           <Grid item xs={12} sm={6}>
             <Box pt={2}>
               <Typography variant="body1" align="center">
                 Cafe Name
               </Typography>
               <form autoComplete="off">
                 <TextField
                   className={classes.form}
                   id="cafe-name"
                   variant="outlined"
                   onChange={handleNameChange}
                   InputProps={{
                     classes: {
                       input: classes.resize,
                     },
                   }}
                 />
               </form>
             </Box>
           </Grid>
           <Grid item xs={12} sm={6}>
             <Box pt={2}>
               <Typography variant="body1" align="center">
                 City
               </Typography>
               <form autoComplete="off">
                 <TextField
                   className={classes.form}
                   id="cafe-city"
                   variant="outlined"
                   onChange={handleCityChange}
                   InputProps={{
                     classes: {
                       input: classes.resize,
                     },
                   }}
                 />
               </form>
             </Box>
           </Grid>
           <Grid item xs={12} sm={6}>
             <Box pt={2}>
               <Typography variant="body1" align="center">
                 State
               </Typography>
               <form autoComplete="off">
                 <TextField
                   className={classes.form}
                   id="cafe-state"
                   variant="outlined"
                   onChange={handleStateChange}
                   InputProps={{
                     classes: {
                       input: classes.resize,
                     },
                   }}
                 />
               </form>
             </Box>
           </Grid>
           <Grid item xs={12} sm={6}>
             <Box pt={2}>
               <Typography variant="body1" align="center">
                 Country
               </Typography>
               <form autoComplete="off">
                 <TextField
                   className={classes.form}
                   id="cafe-country"
                   variant="outlined"
                   onChange={handleCountryChange}
                   InputProps={{
                     classes: {
                       input: classes.resize,
                     },
                   }}
                 />
               </form>
             </Box>
           </Grid>
           <Grid item xs={12} sm={6}>
             <Box pt={2}>
               <Typography variant="body1" align="center">
                 Website
               </Typography>
               <form autoComplete="off">
                 <TextField
                   className={classes.form}
                   id="cafe-website"
                   variant="outlined"
                   onChange={handleWebsiteChange}
                   InputProps={{
                     classes: {
                       input: classes.resize,
                     },
                   }}
                 />
               </form>
             </Box>
           </Grid>
         </Grid>
       </Grid>
       <Grid item xs={12}>
         <Box pt={4} pb={8}>
           <Button variant="contained" size="large" onClick={handleSubmit}>
             <Typography variant="body1" align="center">
               Submit
             </Typography>
           </Button>
         </Box>
       </Grid>
     </Grid>
   );
 }

 NewCafeInput.propTypes = newInputPropTypesShape;

 export default NewCafeInput;

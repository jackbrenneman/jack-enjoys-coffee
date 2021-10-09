/**
 * Cafe Data. Shows all cafes stored in the DB
 */
 import React, { useState } from 'react';
 import PropTypes from 'prop-types';
 // Material UI
 import { makeStyles } from '@material-ui/core/styles';
 import Typography from '@material-ui/core/Typography';
 import Link from '@material-ui/core/Link';
 import Grid from '@material-ui/core/Grid';
 import Box from '@material-ui/core/Box';
 import CardHeader from '@material-ui/core/CardHeader';
 import Card from '@material-ui/core/Card';
 import CardContent from '@material-ui/core/CardContent';
 import IconButton from '@material-ui/core/IconButton';
 import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
 import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
 import ExpandLessIcon from '@material-ui/icons/ExpandLess';
 // Custom Components
 import EditCafeData from './edit/cafe/edit_cafe_data.js';
 import { ActiveBadge, InactiveBadge } from './constants/consts.js';
 // Queries and Fetching
 import { deleteCafeMutation } from '../../graphql/mutations/cafe_gql_mutations.js';
 import { writeGQL } from '../../graphql/fetch.js';

 const useStyles = makeStyles((theme) => ({
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
   emptyBox: {
     width: '36px', // Same width as icon to make things centered
     height: '36px', // Same height as icon to make things centered
   },
 }));

 function CafeRow({
   cafe,
   onCafeDeletion,
   isUserAuthorized,
 }) {
   const classes = useStyles();
   const {
     cafe_id,
     name,
     city,
     state,
     country,
     website,
     is_active,
   } = cafe;

   // State to show the edit roaster entry section
   const [openEdit, setOpenEdit] = useState(false);

   // State used for editing a roaster.
   const [cafeData, setCafeData] = useState({
     name,
     city,
     state,
     country,
     website,
     is_active,
   });

   const handleSaveChangesSuccess = (newData) => {
     setCafeData(newData);
   };

   const handleSaveChangesFail = (newData) => {
     // TODO: show the user there was a failed save
     console.log('failed save');
   };

   const handleCafeDeletionFail = () => {
     // TODO: show the user there was a failed delete
     console.log('failed delete');
   };

   const handleEditCafeClick = (e) => {
     setOpenEdit(!openEdit);
   };

   const {
     name: currentName,
     is_active: currentActiveStatus,
     city: currentCity,
     state: currentState,
     country: currentCountry,
     website: currentWebsite,
   } = cafeData;

   const getTitle = () => {
     return currentActiveStatus ? (
       <ActiveBadge variant="dot">
         <Link
           target="_blank"
           rel="noreferrer"
           href={currentWebsite}
           variant="body2"
         >
           {currentName}
         </Link>
       </ActiveBadge>
     ) : (
       <InactiveBadge variant="dot">
         <Link
           target="_blank"
           rel="noreferrer"
           href={currentWebsite}
           variant="body2"
         >
           {currentName}
         </Link>
       </InactiveBadge>
     );
   };

   const handleDelete = () => {
     writeGQL(deleteCafeMutation, {
       cafe_id: parseInt(cafe_id),
     })
       .then(({ data }) => {
         const { deleteCafe: deletedCafeId } = data;
         if (deletedCafeId) {
           // Write was successful, let user know, update state and return
           onCafeDeletion(deletedCafeId);
           return;
         }
         handleCafeDeletionFail();
         return;
       })
       .catch((e) => {
         handleCafeDeletionFail();
         console.log(e);
       });
     return;
   };

   return (
     <Box p={1}>
       <Card raised className={classes.card}>
         <CardContent className={classes.content}>
           <CardHeader
             className={classes.header}
             titleTypographyProps={{ variant: 'body2' }}
             subheaderTypographyProps={{ variant: 'caption' }}
             title={getTitle()}
             subheader={currentCountry}
           />
           <Grid
             direction="row"
             container
             justify="space-between"
             alignItems="center"
           >
             <Grid item>
               {isUserAuthorized ? (
                 <IconButton
                   aria-label="more"
                   onClick={handleDelete}
                   size="small"
                 >
                   <DeleteForeverIcon />
                 </IconButton>
               ) : (
                 <div className={classes.emptyBox} />
               )}
             </Grid>
             <Grid item>
               <Box px={1}>
                 <Typography variant="caption">{`${currentCity ?? ''}${
                   currentState ? `, ${currentState}` : ''
                 }`}</Typography>
               </Box>
             </Grid>
             <Grid item>
               {isUserAuthorized ? (
                 <IconButton
                   aria-label="more"
                   onClick={handleEditCafeClick}
                   size="small"
                 >
                   {openEdit ? <ExpandLessIcon /> : <EditTwoToneIcon />}
                 </IconButton>
               ) : (
                 <div className={classes.emptyBox} />
               )}
             </Grid>
           </Grid>
         </CardContent>
       </Card>
       {openEdit && (
         <EditCafeData
           cafe={cafe}
           onSaveChangesSuccess={handleSaveChangesSuccess}
           onSaveChangesFail={handleSaveChangesFail}
         />
       )}
     </Box>
   );
 }

 CafeRow.propTypes = {
   cafe: PropTypes.shape({
     cafe_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
     name: PropTypes.string,
     city: PropTypes.string,
     state: PropTypes.string,
     country: PropTypes.string,
     website: PropTypes.string,
     is_active: PropTypes.bool,
   }).isRequired,
   onCafeDeletion: PropTypes.func.isRequired,
   isUserAuthorized: PropTypes.bool.isRequired,
 };

 function CafeData({
   cafes,
   onCafeDeletion,
   isUserAuthorized,
 }) {
   return (
     <Box pb={2}>
       <Grid container>
         <Grid item xs={12}>
           <Box p={2}>
             <Typography variant="h6" align="center">
               Cafes
             </Typography>
           </Box>
         </Grid>
         <Grid item xs={12}>
           <Grid container align="center" justify="center">
             {cafes.map((cafe) => (
               <Grid item xs={10} sm={3} key={cafe.cafe_id}>
                 <CafeRow
                   cafe={cafe}
                   onCafeDeletion={onCafeDeletion}
                   isUserAuthorized={isUserAuthorized}
                 />
               </Grid>
             ))}
           </Grid>
         </Grid>
       </Grid>
     </Box>
   );
 }

 CafeData.propTypes = {
   cafes: PropTypes.array.isRequired,
   onRoasterDeletion: PropTypes.func.isRequired,
   isUserAuthorized: PropTypes.bool,
 };

 CafeData.defaultProps = {
   isUserAuthorized: false,
 };

 export default CafeData;

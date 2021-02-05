/**
 * Under construction page to let people know it's being built.
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';

function UnderConstruction() {
  const useStyles = makeStyles((theme) => ({
    home: {
      backgroundColor: '#EEEEEE',
      minHeight: '100vh',
    },
  }));
  const classes = useStyles();

  return (
    <Box className={classes.home} p={10}>
      <Box p={4} display="flex" justifyContent="center">
        <ReportProblemIcon fontSize="large" />
      </Box>
      <Box p={4} display="flex" justifyContent="center">
        <Typography variant="h2" align="center">
          This page is under construction! Come back later.
        </Typography>
      </Box>
    </Box>
  );
}

export default UnderConstruction;

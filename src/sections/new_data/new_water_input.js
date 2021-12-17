/**
 * A new brewer input, allowing the user to write to the DB
 */
import React from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
// Queries and Fetching
import { waterMutation } from "../../graphql/mutations/water_gql_mutations.js";
import { writeGQL } from "../../graphql/fetch.js";
// Constants
import { newInputPropTypesShape } from "../../consts.js";

function NewWaterInput({
  currentData,
  dataEntry,
  setCurrentData,
  setDataEntry,
  setToast,
}) {
  const { water } = dataEntry;
  const useStyles = makeStyles(() => ({
    form: {
      width: "200px",
    },
    resize: {
      fontSize: 16,
      textAlign: "center",
    },
  }));

  const classes = useStyles();

  const { waters: currentWaters } = currentData;

  const handleNameChange = (e) => {
    setDataEntry({
      ...dataEntry,
      water: {
        ...water,
        name: e.target.value,
      },
    });
  };

  const handleDescriptionChange = (e) => {
    setDataEntry({
      ...dataEntry,
      water: {
        ...water,
        description: e.target.value,
      },
    });
  };

  const handleSubmit = () => {
    const alreadyThere = currentWaters.find(({ name }) => water.name === name);
    if (alreadyThere) {
      // Let user know this brewer already exists and return
      setToast({
        open: true,
        severity: "warning",
        message: "This water name already exists",
      });
      return;
    }
    writeGQL(waterMutation, { water: water })
      .then(({ data }) => {
        const { water: newWater } = data;
        if (newWater.water_id) {
          // Write was successful, let user know, update state and return
          setToast({
            open: true,
            severity: "success",
            message: "New Water Added!",
          });
          setCurrentData({
            ...currentData,
            waters: currentWaters.concat([newWater]),
          });
          return;
        }
        // Write was not successful, let user know and return
        setToast({
          open: true,
          severity: "error",
          message: "Something went wrong...please try again",
        });
      })
      .catch((e) => {
        setToast({
          open: true,
          severity: "error",
          message: "Something went wrong...please try again",
        });
        console.log(e);
      });
    return;
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <Box pt={2}>
          <Typography variant="body1" align="center">
            Water Name
          </Typography>
          <form autoComplete="off">
            <TextField
              className={classes.form}
              id="water-name"
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
      <Grid item xs={12}>
        <Box pt={2}>
          <Typography variant="body1" align="center">
            Description
          </Typography>
          <form autoComplete="off">
            <TextField
              className={classes.form}
              onChange={handleDescriptionChange}
              id="water-description"
              placeholder="Enter Description on Water"
              multiline
              variant="outlined"
              InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
            />
          </form>
        </Box>
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

NewWaterInput.propTypes = newInputPropTypesShape;

export default NewWaterInput;

/**
 * A new coffee input, allowing the user to write to the DB
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import logo from '../../media/icons/coffee-icon.png';
import { processData } from '../../temp_db.js';

function NewCoffeeInput({ dataEntry, setDataEntry }) {
  const { coffee } = dataEntry;
  const { process_id } = coffee;
  const useStyles = makeStyles(() => ({
    form: {
      width: '200px',
    },
    submitButton: {
      background: 'linear-gradient(45deg, grey 30%, #DC7633 90%)',
      color: 'black',
      '&:hover': {
        color: 'white',
        background: 'linear-gradient(45deg, #DC7633 30%, grey 90%)',
      },
    },
  }));

  const coffeeIcon = (
    <Box p={1} display="flex" justifyContent="center">
      <img width={30} src={logo} alt="Coffee Logo" />
    </Box>
  );

  const classes = useStyles();

  const handleNameChange = (e) => {
    setDataEntry({
      ...dataEntry,
      coffee: {
        ...coffee,
        name: e.target.value,
      },
    });
  };

  const handleRoasterIdChange = (e) => {
    setDataEntry({
      ...dataEntry,
      coffee: {
        ...coffee,
        roaster_id: parseInt(e.target.value),
      },
    });
  };

  const handleOriginIdChange = (e) => {
    setDataEntry({
      ...dataEntry,
      coffee: {
        ...coffee,
        origin_id: parseInt(e.target.value),
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

  const handleSubmit = () => {
    console.log(coffee);
    return;
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <Box p={4}>
          <Typography variant="h6">New Coffee</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid container align="center" justify="center" spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="center">
              Name
            </Typography>
            <form autoComplete="off">
              <TextField
                className={classes.form}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                onChange={handleNameChange}
              />
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="center">
              Roaster
            </Typography>
            <form autoComplete="off">
              <TextField
                className={classes.form}
                id="outlined-basic"
                label="Roaster"
                variant="outlined"
                onChange={handleRoasterIdChange}
              />
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="center">
              Origin
            </Typography>
            <form autoComplete="off">
              <TextField
                className={classes.form}
                id="outlined-basic"
                label="Origin"
                variant="outlined"
                onChange={handleOriginIdChange}
              />
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="center">
              Process
            </Typography>
            <form autoComplete="off">
              <TextField
                className={classes.form}
                id="outlined-select-process-native"
                select
                value={process_id}
                onChange={handleProcessIdChange}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                {processData.map(({ name, value }) => (
                  <option value={value} key={name}>
                    {name}
                  </option>
                ))}
              </TextField>
            </form>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box p={4}>
          <Button
            startIcon={coffeeIcon}
            endIcon={coffeeIcon}
            className={classes.submitButton}
            onClick={handleSubmit}
          >
            <Typography variant="body1" align="center">
              Submit
            </Typography>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default NewCoffeeInput;

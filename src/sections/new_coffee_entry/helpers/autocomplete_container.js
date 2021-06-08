/**
 * An autocomplete component wrapper. Unsure if I'm gonna go this route for adding new stuff.
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';

function AutocompleteWrapper({ onChange, options, textField }) {
  const [value, setValue] = useState(null);
  const filter = createFilterOptions();

  const handleOnChange = (event, newValue) => {
    if (typeof newValue === 'string') {
      // I am still unsure when this ever happens tbh
      setValue({
        name: newValue,
      });
    } else if (newValue && newValue.inputValue) {
      const name = newValue?.inputValue;
      // Create a new value from the user input
      // setValue will literally just update the autocomplete component itself
      setValue({
        name,
      });
      // onChange is the function supplied that will update state
      onChange(name ? name : '');
    } else {
      const name = newValue?.name;
      // The user chose something that was already an option
      // setValue will literally just update the autocomplete component itself
      setValue(newValue);
      // onChange is the function supplied that will update state
      onChange(name ? name : '');
    }
  };

  const filterOptions = (options, params) => {
    const filtered = filter(options, params);

    // Suggest the creation of a new value
    if (params.inputValue !== '') {
      filtered.push({
        inputValue: params.inputValue,
        name: `Add "${params.inputValue}"`,
      });
    }

    return filtered;
  };

  return (
    <Autocomplete
      value={value}
      onChange={handleOnChange}
      filterOptions={filterOptions}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="autcomplete-with-add-option"
      options={options}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.name;
      }}
      renderOption={(option) => option.name}
      freeSolo
      renderInput={textField}
    />
  );
}

AutocompleteWrapper.propTypes = {
  fieldName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  textField: PropTypes.func.isRequired,
};

export default AutocompleteWrapper;

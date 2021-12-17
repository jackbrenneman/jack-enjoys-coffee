/**
 * A simple autocomplete component wrapper.
 */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";

function AutocompleteWrapperSimple({
  onChange,
  options,
  textField,
  shouldShowValueOnChange,
  initialValue,
}) {
  const [value, setValue] = useState({ name: initialValue ?? "" });
  const filter = createFilterOptions();

  const handleOnChange = (event, newValue) => {
    if (typeof newValue === "string") {
      // I am still unsure when this ever happens tbh
      if (shouldShowValueOnChange) {
        setValue({
          name: newValue,
        });
      }
    } else {
      // The user chose something that was already an option
      if (shouldShowValueOnChange) {
        setValue(newValue);
      } else {
        setValue({ name: "" });
      }
      // onChange is the function supplied that will update state
      onChange(newValue ? newValue : "");
    }
  };

  const filterOptions = (options, params) => {
    const filtered = filter(options, params);
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
      id="autcomplete-simple"
      options={options}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === "string") {
          return option;
        }
        // Regular option
        return option.name;
      }}
      renderOption={(option) => option.name}
      renderInput={textField}
      freeSolo
    />
  );
}

AutocompleteWrapperSimple.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  textField: PropTypes.func.isRequired,
  shouldShowValueOnChange: PropTypes.bool,
  initialValue: PropTypes.string,
};

AutocompleteWrapperSimple.defaultProps = {
  shouldShowValueOnChange: true,
  initialValue: "",
};

export default AutocompleteWrapperSimple;

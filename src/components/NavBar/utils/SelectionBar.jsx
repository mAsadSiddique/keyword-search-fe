import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const SelectionBar = ({ label, handleStatus, FilterSelection, status }) => {
  return (
    <FormControl fullWidth sx={{ mt: { xs: 2, sm: 0 }, width: "100px" }}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        variant="standard"
        id="demo-simple-select"
        value={status}
        label={label}
        onChange={handleStatus}
      >
        {Object.values(FilterSelection)?.map((item, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectionBar;

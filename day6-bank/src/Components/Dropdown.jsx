import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Dropdown = ({ onChangeHandler, tenureValue }) => {
  const handleChange = (event) => {
    onChangeHandler(event);
  };
  return (
    <div>
      <Box sx={{ minWidth: "100%" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tenureValue}
            label="Tenure"
            onChange={handleChange}
          >
            <MenuItem value={5}>5 years</MenuItem>
            <MenuItem value={10}>10 years</MenuItem>
            <MenuItem value={15}>15 years</MenuItem>
            <MenuItem value={20}>20 years</MenuItem>
            <MenuItem value={25}>25 years</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default Dropdown;

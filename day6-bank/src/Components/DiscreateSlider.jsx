import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "../App.css";

const DiscreteSlider = ({
  title,
  type,
  value,
  onSliderChange,
  defaultValue,
  steps,
  min,
  max,
}) => {
  const handleChange = (event, newValue) => {
    onSliderChange(newValue);
  };

  return (
    <div className="slider">
      <p className="slider-title">{title}</p>
      <p className="slider-value">
        {type} {value}
      </p>
      <Box sx={{ width: "100%" }}>
        <Slider
          aria-label="cost"
          defaultValue={defaultValue}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          step={steps}
          marks
          min={min}
          max={max}
        />
      </Box>
      <div className="slider-value-container">
        <p className="silder-min">
          {type} {min}
        </p>
        <p className="slider-max">
          {type} {max}
        </p>
      </div>
    </div>
  );
};

export default DiscreteSlider;

import React from "react";

const Inputs = ({ handleInput, handleRating, inputValue, ratingValue }) => {
  return (
    <div className="input-container">
      <input
        className="searchrest"
        type="text"
        value={inputValue}
        onChange={handleInput}
        placeholder="Search"
      />
      <div>
        <label>Minimum Rating: </label>
        <input
          className="searchrating"
          type="number"
          onChange={handleRating}
          value={ratingValue}
          max={5}
          min={0}
          step={0.5}
          placeholder="0"
        />
      </div>
    </div>
  );
};

export default Inputs;

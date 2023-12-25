import React from "react";
import "./App.css";

const Total = (props) => {
  return (
    <div className="total-container">
      <div className="value">
        <p className="total-p">Total</p>
        <p className="total">$ {props.total}</p>
      </div>
    </div>
  );
};

export default Total;

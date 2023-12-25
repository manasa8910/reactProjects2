import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import "./App.css";

const Navbar = (props) => {
  return (
    <nav>
      <p>UseReducer</p>
      <div className="cart">
        <p className="badge">{props.quantity}</p>
        <FaCartShopping />
      </div>
    </nav>
  );
};

export default Navbar;

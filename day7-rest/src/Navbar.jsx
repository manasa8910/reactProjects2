import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          alt="Geekfood-logo"
        />
        <p>GeekFoods</p>
      </div>
      <div className="link-list">
        <ul>
          <li className="active">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Quote</a>
          </li>
          <li>
            <a href="#">Resturants</a>
          </li>
          <li>
            <a href="#">Foods</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <button className="getstarted">Get Started</button>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdFoodBank } from "react-icons/md";
import Rating from "@mui/material/Rating";

const Card = ({ restaurant }) => {
  return (
    <>
      <div className="card" key={restaurant.id}>
        <div className="top">
          <div className="rest-name">
            <p className="name">{restaurant.name}</p>
            <Rating
              name="read-only"
              precision={0.5}
              value={restaurant.rating}
              readOnly
            />
          </div>
          <div className="address-container">
            <p className="address">
              <span className="location">
                <FaLocationDot />
              </span>{" "}
              {restaurant.address}, {restaurant.address_line_2}
            </p>
          </div>
          <div className="codes">
            <p className="outcode">{restaurant.outcode}</p>
            <p className="postcode">{restaurant.postcode}</p>
          </div>
        </div>
        <div className="bottom">
          <p className="type">
            <span className="food-icon">
              <MdFoodBank />
            </span>
            {restaurant.type_of_food}
          </p>
          <p>
            <a className="link" href={restaurant.URL}>
              Visit Menu
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;

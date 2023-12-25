import React, { useState } from "react";
import "./App.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Card = ({ phone, add, minus, onRemove }) => {
  const [updatedPrice, setUpdatedPrice] = useState(phone.price);

  const handleAdd = () => {
    add(phone.id);
    let price = (phone.quantity + 1) * phone.price;
    price = price.toFixed(2);
    setUpdatedPrice(price);
  };

  const handleMinus = () => {
    const newQuantity = phone.quantity - 1;
    let price = newQuantity * phone.price;
    price = price.toFixed(2);
    if (newQuantity < 0) {
      onRemove(phone.id);
    } else {
      minus(phone.id);
      setUpdatedPrice(price);
    }
  };

  return (
    <div className="phone-container" key={phone.id}>
      <div className="phone-info-container">
        <img className="phone-image" src={phone.image} alt={phone.name} />
        <div className="phone-info">
          <p className="phone-name">{phone.name}</p>
          <p className="phone-price">$ {updatedPrice}</p>
          <button onClick={onRemove} className="remove-btn ">
            remove
          </button>
        </div>
      </div>
      <div className="button-container">
        <div className="phone-quantity">
          <button onClick={handleAdd}>
            <IoIosArrowUp />
          </button>
          <p>{phone.quantity}</p>
          <button onClick={handleMinus}>
            <IoIosArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

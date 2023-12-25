import { useState } from "react";
import "./App.css";
import phonelist from "./phone.json";
import Card from "./Card";
import Navbar from "./Navbar";
import Total from "./Total";

function App() {
  const [cartItems, setCartItems] = useState(
    phonelist.map((phone) => ({ ...phone, quantity: 1 }))
  );

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      handleRemove(itemId);
    } else {
      const updatedCart = cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
      setCartItems(updatedCart);
    }
  };

  const handleAdd = (itemId) => {
    updateQuantity(
      itemId,
      cartItems.find((item) => item.id === itemId).quantity + 1
    );
  };

  const handleMinus = (itemId) => {
    updateQuantity(
      itemId,
      cartItems.find((item) => item.id === itemId).quantity - 1
    );
  };

  const handleRemove = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const handleClear = () => {
    setCartItems([]);
  };

  let totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  totalPrice = totalPrice.toFixed(2);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <Navbar quantity={totalItems} />
      <div className="App">
        <p className="bag">Your Bag</p>

        {cartItems.length === 0 ? (
          <p className="empty-cart-message">is currently empty !</p>
        ) : (
          <>
            {cartItems.map((phone) => (
              <Card
                key={phone.id}
                phone={phone}
                add={handleAdd}
                minus={handleMinus}
                onRemove={() => handleRemove(phone.id)}
              />
            ))}
          </>
        )}
      </div>
      {cartItems.length > 0 && <Total total={totalPrice} />}
      {cartItems.length > 0 && (
        <div className="clear-container">
          <button className="clear-btn" onClick={handleClear}>
            Clear Cart
          </button>
        </div>
      )}
    </>
  );
}

export default App;

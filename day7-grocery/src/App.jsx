import { useEffect, useState } from "react";
import "./App.css";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [cards, setCards] = useState([]);
  const [grocery, setGrocery] = useState("");

  useEffect(() => {
    const storedCards = localStorage.getItem("cards");
    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
  }, []);

  // Save data to localStorage whenever cards change
  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const groceryHandler = (event) => {
    setGrocery(event.target.value);
  };

  const addToList = () => {
    if (grocery === "") {
      toast.error("Please Provide Value !");
      setGrocery("");
    } else {
      const newItem = {
        id: cards.length + 1,
        item: grocery,
        isChecked: false,
      };
      setCards([...cards, newItem]);
      setGrocery("");
      toast.success("Item Added To The List");
    }
  };

  const deleteHandler = (id) => {
    const updatedList = cards.filter((item) => item.id !== id);
    setCards(updatedList);
    toast.success("Item Deleted !");
  };

  const checkboxHandler = (id) => {
    setCards((prevCards) =>
      prevCards.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };
  return (
    <div className="App">
      <div className="container">
        <p className="heading">Grocery Bud</p>
        <div className="input">
          <input onChange={groceryHandler} value={grocery} type="text" />
          <button onClick={addToList}>Add Item</button>
        </div>
        <div>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>

        {cards.map((card) => (
          <div className="item-container" key={card.id}>
            <div className="item">
              <input
                type="checkbox"
                checked={card.isChecked}
                onChange={() => checkboxHandler(card.id)}
              />
              <p
                style={{
                  textDecoration: card.isChecked ? "line-through" : "none",
                }}
              >
                {card.item}
              </p>
            </div>
            <button className="delete" onClick={() => deleteHandler(card.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

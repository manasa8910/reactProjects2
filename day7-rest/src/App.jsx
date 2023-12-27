import React, { useEffect, useState } from "react";
import "./App.css";
import restaurantData from "./restaurant.json";
import Navbar from "./Navbar";
import Card from "./Card";
import Input from "./Input";
import { Pagination, Stack } from "@mui/material";

function App() {
  const [restaurants, setRestaurants] = useState([...restaurantData]);
  const [searched, setSearched] = useState("");
  const [searchRating, setSearchRating] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [length, setLength] = useState(restaurantData.length);

  const handleInput = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearched(searchTerm);
    const updated = restaurantData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    setLength(searchTerm === "" ? restaurantData.length : updated.length);

    if (currentPage > Math.ceil(length / numberOfCards)) {
      setCurrentPage(1);
    }

    setRestaurants(updated);
  };

  const numberOfCards = 6;
  const totalPage = Math.ceil(length / numberOfCards);

  useEffect(() => {
    const totalPage = Math.ceil(length / numberOfCards);
    const indexOfLastItem = currentPage * numberOfCards;
    const indexOfFirstItem = indexOfLastItem - numberOfCards;
    const currentItemList = restaurantData.slice(
      indexOfFirstItem,
      indexOfLastItem
    );
    setRestaurants(currentItemList);
  }, [currentPage, restaurantData, length]);

  const handleRating = (event) => {
    const searchTerm = searched.toLowerCase();
    const ratingValue = parseFloat(event.target.value);

    if (searchTerm === "") {
      const updated = restaurantData.filter(
        (item) => item.rating >= ratingValue
      );
      setRestaurants(updated);
    } else {
      const updated = restaurantData.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm) &&
          item.rating >= ratingValue
      );
      setRestaurants(updated);
    }

    setSearchRating(ratingValue);
  };

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="App">
      <Navbar />
      <Input
        handleInput={handleInput}
        handleRating={handleRating}
        inputValue={searched}
        ratingValue={searchRating}
      />
      <div className="cards">
        {restaurants.map((restaurant) => (
          <Card key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
      <Stack spacing={2}>
        <Pagination
          count={totalPage}
          page={currentPage}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  const [imgURL, setImgURL] = useState("");
  const [loading, setLoading] = useState("");
  const [inputValue, setInputValue] = useState("");

  async function query(data) {
    setLoading("Loading...");
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/prompthero/openjourney-v4",
        {
          headers: {
            Authorization: "Bearer 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",
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const result = await response.blob();
      return result;
    } catch (error) {
      setLoading("");
      alert(
        "Error while fetching the data from API. Please retry after some time."
      );
      console.log(error);
    }
  }

  function generateImage() {
    // console.log(typeof inputValue);
    if (!inputValue) {
      alert("Input field is Empty.");
      return;
    }
    query({ inputs: inputValue }).then((result) => {
      if (result.type === "application/json") {
        setLoading("");
        alert("Error while fetching the data.");
        return;
      }
      const imageURL = URL.createObjectURL(result);
      // console.log(imageURL);
      setImgURL(imageURL);
      setLoading("");
    });
  }

  return (
    <>
      <div className="App">
        <h1 className="heading">AI Image Generator</h1>
        <textarea
          onChange={(e) => setInputValue(e.target.value)}
          className="textArea"
          placeholder="Enter text..."
        ></textarea>
        <br />
        <button onClick={generateImage} className="generateButton">
          Generate
        </button>
        <p>{loading}</p>
        {imgURL !== "" ? (
          <div className="imageContainer">
            <img src={imgURL} alt="img" />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;

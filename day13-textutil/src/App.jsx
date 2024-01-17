import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Alert from "./components/Alert.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import TextForm from "./components/TextForm.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  /* ---------Alert into website----------- */
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    /* Object created to set alert : */
    setAlert({
      msg: message,
      type: type,
    });

    /* Auto dismissing the alert after some time : */

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode == "dark") {
      setMode("light");
      document.body.style.background =
        "linear-gradient(35deg, rgb(241, 241, 241) 50%, rgb(132, 220, 198) 50%)";
      showAlert("Light mode has been enabled", "success");
      document.title = "Text Editor App - Light Mode";
    } else {
      setMode("dark");
      document.body.style.background =
        "linear-gradient(35deg, rgb(92, 92, 92) 50%, rgb(27, 27, 27) 50%)";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Text Editor App - Dark Mode";
    }
  };

  return (
    <BrowserRouter>
      <Navbar title="Text Editor" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/about" element={<About mode={mode} />} />
        <Route path="/contact" element={<Contact mode={mode} />} />
        <Route
          path="/"
          element={
            <TextForm
              heading="Text Editor App - Word Counter, Character Counter, Remove Extra Space"
              summaryHead="Summery Of Your Text"
              mode={mode}
              showAlert={showAlert}
            />
          }
        />
      </Routes>
      <Footer creatername="Rahul Meena" />
    </BrowserRouter>
  );
}

export default App;

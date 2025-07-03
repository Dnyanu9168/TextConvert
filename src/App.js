import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// }from "react-router-dom"

import { useState } from "react";
import Alert from "./Components/Alert"; // Capitalized

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => setAlert(null), 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      setAlert({ msg: "Dark mode has been enabled", type: "success" });
      document.title = "TextUtils - Dark Mode";
      setTimeout(() => setAlert(null), 3000);
    } else {
      setMode("light");
      document.title = "TextUtils - light Mode";
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        AboutUS="about"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      {/* <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={
            <TextForm showAlert={showAlert} heading="Enter The Text For Analysis" mode={mode} />} />
        </Routes>
              </div>
        </Router> */}
      <div className="container my-3">
        <TextForm 
         showAlert={showAlert}
          heading="Enter The Text For Analysis"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;

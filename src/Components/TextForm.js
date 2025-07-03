import { useState } from "react";
import React from "react";

import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
   props.showAlert("Converted To upperCase", "success");

  };

  const handleloClick = () => {
    // console.log("Uppercase was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
      props.showAlert("Converted To lowerCase", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
      // props.showAlert("Copied", "primary");
  };
  const handleClearClick = (event) => {
    // console.log("On change");
    setText(" ");
      props.showAlert("text Cleared", "danger");
  };

  const selectText = (event) => {
    // console.log("On change");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
       props.showAlert("Copied!", "secondary");
  };

  const RemoveSpace = (event) => {
    var Newtext = text.split(/[ ]+/);
    setText(Newtext.join(" "));
      props.showAlert("All Space Removed", "success");
  };
  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "blue" }}
      >
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8 "
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white " : "blue",
            }}
          ></textarea>
        </div>
        <button className="btn  btn-primary mx-2" onClick={handleUpClick}>
          Connvert to Uppercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleloClick}>
          Connvert to Lowercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>

        <button className="btn btn-primary mx-2" onClick={selectText}>
          Copy Text
        </button>

        <button className="btn btn-primary mx-2" onClick={RemoveSpace}>
          Remove Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "blue" }}
      >
        <h1>Your Text Summary</h1>
        <p>
  {text.trim().split(/\s+/).filter((word) => word !== "").length} words and {text.length} characters
</p>

        <p>{0.008 * text.split(" ").length} Minutes read</p>
      </div>
    </>
  );
}

import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(":Converted to upper case!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(":Converted to lower case!", "success");
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert(":Text Cleared!", "success");
  };
  const handleCopyClick = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(":Copied to Clipboard!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert(":Extra spacea removed!", "success");
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const n1 = text.split(" ").length;
  const n2 = text.length;

  return (
    <>
      <div
        className="container bg-props.mo"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          />
        </div>
        <button onClick={handleUpClick} className="btn btn-primary">
          TO UPPER-CASE
        </button>
        <button onClick={handleLoClick} className="btn btn-primary mx-1">
          to lower-case
        </button>
        <button onClick={handleClearClick} className="btn btn-primary mx-1">
          Clear
        </button>
        <button onClick={handleCopyClick} className="btn btn-primary mx-1">
          Copy
        </button>
        <button onClick={handleExtraSpaces} className="btn btn-primary mx-1">
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary:</h2>
        <p>
          {n1} words and {n2} characters
        </p>
        <p>{n1 * 0.008} minutes read</p>
        <h2>Preview:</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

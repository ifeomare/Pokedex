import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";



function Test() {
  const url = "https://pokeapi.co/api/v2/pokemon";

  fetch(`${url}/1/`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Here is the error:", error));
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Test />);

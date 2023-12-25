import React from "react";

function Test() {
  const url = "https://pokeapi.co/api/v2/pokemon";

  fetch(`${url}/1/`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Here is the error:", error));
}
import React from "react";

const GetPokeURL = (num) => {
  const url = "https://pokeapi.co/api/v2";

  fetch(`${url}/pokemon?limit=100&offset=${num}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // console.log(num);
    })
    .catch((error) => console.error("Here is the error:", error));
}

export default GetPokeURL;

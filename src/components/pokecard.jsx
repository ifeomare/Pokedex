import React from "react";
import "../styles/pokecard.css";

const PokeCard = (pokemon) => {
  fetch(`${pokemon.url}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Here is the error:", error));

  return (
    <div class="pokecard">
      Pokemon: {pokemon.name} URL: {pokemon.url}
    </div>
  );
};

export default PokeCard;
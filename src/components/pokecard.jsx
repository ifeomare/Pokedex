import React, { useEffect, useState } from "react";
import "../styles/pokecard.css";

const PokeCard = ({ url }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchData();
  }, [url]);

  useEffect(() => {
    pokemonData && console.log("Updated Pokemon List:", pokemonData);
  }, [pokemonData]);

  return (
    <div className="pokecard">
      {pokemonData ? (
        <>
          <div className="span">
            <span id="id">{pokemonData.id}</span>
          </div>
          <p>{pokemonData.name}</p>
          <div className="pokeimg">
            <img src={pokemonData.sprites.other.home.front_default} alt="" />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokeCard;

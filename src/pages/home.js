// import React from "react";
import "../styles/home.css";
import React, { useState, useEffect } from "react";
import PokeCard from "../components/pokecard.jsx";

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const getPokeURL = async () => {
      try {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
        const response = await fetch(url);
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error("Error fetching Pokemon URLs:", error);
      }
    };

    getPokeURL();
  }, []);

  // Log pokemonList outside of the useEffect to see the updated state.
  // useEffect(() => {
  //   console.log("Updated Pokemon List:", pokemonList);
  // }, [pokemonList]);

  return (
    <>
      <h1>this is the home page</h1>
      {/* You can map through pokemonList to render Pokemon details */}
      <section class="pokedex">
        {pokemonList.map((pokemon) => (
          <PokeCard {...pokemon} key={pokemon.name} />
        ))}
      </section>
    </>
  );
};

export default Home;

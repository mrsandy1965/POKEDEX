import React from "react";
import "./App.css";
import Pokedex from "./pokedex/pokedex";
import { pokemonData } from "../data/pokemonData";
import { Component } from "react";
import { useState } from "react";

const allPokemons = pokemonData;
function App(pokemonData) {
  const [searchField, setSearchField] = useState("");
  const [searchedPokemons, setSearchedPokemons] = useState(allPokemons);
  const [selectedPokemon, setSelectedPokemon] = useState(undefined);

  const handledata = (inputValue) => {
    setSearchField(inputValue);

    const filteredPokemons = allPokemons.filter(
      (pokemon) =>
        pokemon.name &&
        pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    setSearchedPokemons(filteredPokemons);
  };

  const handleClick = (pokemonName) => {
    let a ;
    allPokemons.forEach((pokemon) => {
      if (pokemon.name === pokemonName) {
        a = pokemon;
      }
    });
    // console.log(a.name);
    let selected = allPokemons.find(
      (pokemon) => {pokemon.name === pokemonName}
    );
    // console.log(selected);  
    setSelectedPokemon(a);
  };



  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex pokemonData={searchedPokemons} handledata={handledata} handleClick={handleClick} selectedPokemon={selectedPokemon} />
    </div>
  );
}

export default App;

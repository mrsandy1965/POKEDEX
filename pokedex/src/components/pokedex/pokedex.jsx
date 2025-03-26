import React from "react";
import PokeSearchResult from "../PokeSearchResult/pokeSearchResult";
import "./pokedex.css";
import Searchbox from "../Searchbox/searchbox";
import Pokelist from "../pokelist/pokelist";


const Pokedex = ({pokemonData , handledata , handleClick , selectedPokemon}) => {
  return(
    <div className="pokedex-container">
        <div className="pokelis-container">
            <Searchbox handledata={handledata}/>
            <Pokelist pokemonData={pokemonData} handleClick={handleClick}/>
        </div>
        <div className="pokisearch-container">
            <PokeSearchResult selectedPokemon={selectedPokemon}/>
        </div>
    </div>
  );
}

export default Pokedex;
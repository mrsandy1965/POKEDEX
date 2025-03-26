import React from "react";
import "./pokelist.css";
import PokeCard from "../pokecard/pokecard";

const PokeList = ({pokemonData , handleClick}) => {
    pokemonData.filter((pokemon) => {   
        pokemon.length?false:!pokemon.name?false:!pokemon.sprites?false:pokemon.sprites.normal?false:pokemon.sprites.animated?true:false
    })
    return(
            <div className="pokelist">
                {pokemonData.map((pokemon, index) => {
                    if (pokemon.name!==undefined) {
                        if(pokemon.sprites!==undefined){
                            return <PokeCard name={pokemon.name} sprites={pokemon.sprites} handleClick={handleClick} />
                        }
                    }
                })}
            </div>
    );
}

export default PokeList;
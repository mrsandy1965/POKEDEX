import React from "react";
import "./pokeSearchResult.css";


const PokeSearchResult = (selectedPokemon) => {
  if (selectedPokemon.selectedPokemon !== undefined) {
  
    console.log(JSON.parse(selectedPokemon.selectedPokemon.sprites).animated)
  }else{
    let s = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3APok%25C3%25A9_Ball_icon.svg&psig=AOvVaw3WRxwiWqi8goJLbkmMcuHU&ust=1743065235043000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNDy7Jaup4wDFQAAAAAdAAAAABAJ"
  }
  return(
    <div className="poke-result-card">
       {
            selectedPokemon.selectedPokemon!== undefined ? (
            <div >
                <img src={JSON.parse(selectedPokemon.selectedPokemon.sprites).animated!==undefined?JSON.parse(selectedPokemon.selectedPokemon.sprites).animated:JSON.parse(selectedPokemon.selectedPokemon.sprites).normal}  />
                <p>{selectedPokemon.selectedPokemon.name.toUpperCase()}</p>
                <p>Height : {selectedPokemon.selectedPokemon.height}</p>
                <p>Weight : {selectedPokemon.selectedPokemon.weight}</p>
                <p>Base XP: {selectedPokemon.selectedPokemon.base_experience}</p>

            </div>
            ) : (
                <h2>Welcome to the Pokedex</h2>
            )
       }
    </div>
  );
}  

export default PokeSearchResult;
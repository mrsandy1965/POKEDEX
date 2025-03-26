import React from "react";
import "./pokecard.css";

const PokeCard = ({key,name,sprites,handleClick}) => {
    sprites = JSON.parse(sprites)
    return(
            <div className="pokecard" onClick={()=>{
                handleClick(name);}}>
                <img src={sprites.normal}></img>
                <p>{name}</p>
            </div>
    );
}
export default PokeCard;
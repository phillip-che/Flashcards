import React from "react";
import bg from "../assets/who'sthatpokemon.png";

const Front = ( pokemon ) => {
    return(
        <div className="Front">
            <img className="card-background" src={bg}/>
            <img className="pokemon-image" src={pokemon.img}/>
        </div>
    )
}

export default Front;
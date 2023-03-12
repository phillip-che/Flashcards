import React from "react";

const Front = ( pokemon ) => {
    return(
        <div className="Front">
            <img className="pokemon-image" src={pokemon.img}/>
        </div>
    )
}

export default Front;
import { useState } from 'react';
import React from "react";
import bg from "../assets/who'sthatpokemon.png";
import Front from "./Front"
import Back from "./Back"

const Card = ( flashcard ) => {
    const [flip, setFlip] = useState(false);
    return (
        <div className="Card" onClick={() => setFlip(!flip)}>
            {flip ? <Back /> : <Front pokemon={ flashcard } />}
        </div>
    )
}

export default Card;
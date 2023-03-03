import { useState } from 'react';
import React from "react";
import Front from "./Front"
import Back from "./Back"

const Card = ( flashcard ) => {
    const [flip, setFlip] = useState(false);
    return (
        <div className="Card" onClick={() => setFlip(!flip)}>
            {flip ? <Back answer={flashcard.answer} /> : <Front img={ flashcard.img } />}
        </div>
    )
}

export default Card;
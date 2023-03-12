import { useState } from 'react'
import React from "react"
import Front from "./Front"
import Back from "./Back"

const Card = ( pokemon ) => {
    const [flip, setFlip] = useState(false)
    return (
        <div className="Card" onClick={() => setFlip(!flip)}>
            {flip ? <Back answer={ pokemon.answer } /> : <Front img={ pokemon.img } />}
        </div>
    )
}

export default Card;
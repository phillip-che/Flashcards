import React from 'react';
import { useState } from 'react';

const Guess = ( pokemon ) => {
    const [guess, setGuess] = useState('')
    const [result, setResult] = useState('')

    const checkGuess = () => {
        if(pokemon.answer.toLowerCase() != guess.toLowerCase()) {
            setResult('incorrect')
        } else {
            setResult('correct')
        }
    }

    return(
        <div>
            <label>
                Guess:
            </label>
            <input onChange={(e) => {
                setGuess(e.target.value);
            }}>
            </input>
            <button className="submit" onClick={checkGuess}>
                Submit
            </button>
        </div>
    )
}

export default Guess;
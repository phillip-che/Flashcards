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
            <label className="guess">
                Guess:
            </label>
            <input className="input" id={result} onChange={(e) => {
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
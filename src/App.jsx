import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import banner from './assets/banner.png'
import pikachu from './assets/pikachu.png'
import squirtle from './assets/squirtle.png'
import bulbasaur from './assets/bulbasaur.png'
import magikarp from './assets/magikarp.png'
import slowpoke from './assets/slowpoke.png'
import snorlax from './assets/snorlax.png'
import jigglypuff from './assets/jigglypuff.png'
import salamence from './assets/salamence.png'
import mewtwo from './assets/mewtwo.png'
import Darkrai from './assets/darkrai.png'
import Icon from '@mdi/react'
import { mdiShuffle } from '@mdi/js'
import Guess from './components/Guess'

function App() {
const [flashcard, setFlashcard] = useState(0);
const nextCard = () => {setFlashcard((flashcard + 1)%10)}; 
const prevCard = () => setFlashcard((flashcard <= 0 ? flashcard :  (flashcard - 1)%10));
const pokemon = POKEMON_INFO[flashcard];

return (
    <div className="App">
      <div>
        <img className="banner" src={banner}/>
        <h1>Who's That Pokémon?</h1>
        <h3>How many Pokémon do you think you can guess?</h3>
        <p>Number of Pokémon: 10</p>
        <Card img={pokemon.image} answer={pokemon.answer}/>
        <Guess answer={pokemon.answer} />
        <button className="prev" onClick={prevCard}>←</button>
        <button className="next" onClick={nextCard}>→</button>
        <button className="shuffle" onClick={() => POKEMON_INFO.sort( () => Math.random() - 0.5)}><Icon path={mdiShuffle} size={1} /></button>
      </div>
    </div>
  )
};

const POKEMON_INFO = [
  {
    id: 1,
    image: pikachu,
    answer: "Pikachu"
  },
  {
    id: 2,
    image: squirtle,
    answer: "Squirtle"
  },
  {
    id: 3,
    image: bulbasaur,
    answer: "Bulbasaur"
  },
  {
    id: 4,
    image: magikarp,
    answer: "Magikarp"
  },
  {
    id: 5,
    image: slowpoke,
    answer: "Slowpoke"
  },
  {
    id: 6,
    image: snorlax,
    answer: "Snorlax"
  },
  {
    id: 7,
    image: jigglypuff,
    answer: "Jigglypuff"
  },
  {
    id: 8,
    image: salamence,
    answer: "Salamence"
  },
  {
    id: 9,
    image: mewtwo,
    answer: "Mewtwo"
  },
  {
    id: 10,
    image: Darkrai,
    answer: "Darkrai"
  }
];

export default App

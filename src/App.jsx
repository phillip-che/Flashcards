import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import banner from './assets/banner.png'
import pikachu from './assets/pikachu.png'


function App() {
const [flashcard, setFlashcard] = useState(0);
let pokemon = POKEMON_INFO[flashcard];

return (
    <div className="App">
      <div>
        <img className="banner" src={banner}/>
        <h1>Who's That Pokemon?</h1>
        <h3>Can you guess which Pokemon this is?</h3>
        <p>Number of Pokemon: 10</p>
        <Card img={pokemon.image} answer={pokemon.answer}/>
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
    image: pikachu,
    answer: "Squirtle"
  }
];

export default App

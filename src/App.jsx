import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <h1>Who's That Pokemon?</h1>
        <h3>Can you guess which Pokemon this is?</h3>
        <p>Number of Pokemon: 10</p>
        <Card/>
      </div>
    </div>
  )
}

export default App

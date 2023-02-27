import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='header'>
        <h1>Basic knowledge of Javascript!</h1>
        <h2>Test how proficient you are in Javascript</h2>
        <h4>Number of cards: </h4>
      </div> 
      <div className='card'>
      </div>    
    </div>
    
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <p className="title">Největší polštářová bitva v ČR</p>
      <div className="card">
        <h1>
         1. 4. 2023
        </h1>
      </div>
      <h3>
        Více informací již brzy...
      </h3>
    </div>
  )
}

export default App

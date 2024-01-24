import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Remove from './Remove'

function App() {
  
  let [Counter, setCounter] = useState(0)

  const addValue = ()=>{
     Counter = Counter +1
     setCounter(Counter)
     console.log("clicked", Counter)
  }
  
    return (
      <>
      <h1>{Counter} </h1>
      <button onClick={addValue}>Increment </button>
      <Remove Counter={Counter} setCounter={setCounter}/>
      </>
    )
}

export default App

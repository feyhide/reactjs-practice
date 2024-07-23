import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter ] = useState(0)

  const dValue = () => {
    if(counter>0){
      setCounter(--counter)
      console.log(counter)
    }
  }
  const aValue = () => {
     if(counter < 20){
       setCounter(++counter)
       console.log(counter)
     }
  }
  const rValue = () => {
    setCounter(counter=0)  
  }

  return (
    <>
      <h1>chai</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={dValue}>-</button>
      <button onClick={aValue}>+</button>
      <br />    
      <button onClick={rValue}>reset</button>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './components/Display'
import ControlSS from './components/ControlSS'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div><Display/></div>
      <div><ControlSS/></div>
      
    </>
  )
}

export default App

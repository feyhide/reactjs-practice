import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <h1>Learn about redux</h1>
      <Addtodo/>
      <Todos/>

    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Usercontextprovider from './context/Usercontextprovider'
import Login from './components/login/Login'
import Profile from './components/profile/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Usercontextprovider>
     <h1>React with Chai || Fahad</h1>
     <Login/>
     <Profile/>
    </Usercontextprovider>
  )
}

export default App

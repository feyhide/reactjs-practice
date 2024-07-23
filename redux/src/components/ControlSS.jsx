import React from 'react'
import { useDispatch } from 'react-redux'

const ControlSS = () => {
    const dispatch = useDispatch();
    
    const increment = () => {
      dispatch({type: "inc"})
    }
    const decrement = () => {
      dispatch({type: "dec"})
      
    }
    return (<>
    <button onClick={increment}>++</button>
    
    <button onClick={decrement}>--</button>
    </>
  )
}

export default ControlSS
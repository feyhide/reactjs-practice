import React from 'react'
import { useDispatch } from 'react-redux'
import { counterActions } from '../store';

const ControlSS = () => {
    const dispatch = useDispatch();
    
    const increment = () => {
      dispatch(counterActions.inc());
    }
    const decrement = () => {
      dispatch(counterActions.dec());
      
    }

    return (<>
    <button onClick={increment}>++</button>
    
    <button onClick={decrement}>--</button>
    </>
  )
}

export default ControlSS
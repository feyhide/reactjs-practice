import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {

    const counter = useSelector(store => store.counter)
    return (
    <p>{counter}</p>
  )
}

export default Display
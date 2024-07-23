import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div className='bg-gray-600 px-10'>User: {id}</div>
  )
}

export default User
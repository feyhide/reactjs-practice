import React , {useState, useContext} from 'react'
import usercontext from '../../context/usercontext'


function Login() {
    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')

    const {setuser} = useContext(usercontext)
    const handlesubmit = (e) => {
        e.preventDefault()
        setuser({username,password})
    }

    
  return (
    <div>
        <h2>Login</h2>
        <input type='text' placeholder='username'
         onChange={(e)=>setusername(e.target.value)}/>

        <input type='text' placeholder='password'
        onChange={(e)=>setpassword(e.target.value)}/>

        <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login
import React from 'react'
import { useState ,useContext} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
const {setUser}=useContext(UserContext)

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})

    }
  return (
    
    <>
    <input type='text' value={username}  onChange={(e)=>setUsername(e.target.value)} placeholder='username'/>
    { ' '}
    <input type='text'value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
    <br></br>
    <br></br>
    <button style={{background:"red"}} onClick={handleSubmit}>Submit</button>
    
    </>
  )
}

export default Login

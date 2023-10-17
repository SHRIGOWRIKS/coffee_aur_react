
import './App.css'
import {useState} from 'react'

function App() {
  const [counter,setCounter]=useState(0);

let appfooter="Thanks for watching out"
  const handleAdd=()=>{
    if(counter>0 && counter<25)
    {
      setCounter(prev=>prev+1)
    }
    else{
      alert('Make sure the range is between')
    }
    
  }

  const handleRemove=()=>{
    if(counter>0){
      setCounter(prev=>prev-1)
    }
    else{
      alert("Limit crossed")
    }
    
  }
  return (
    <>
      <h1>Coffee aur react--Counter App</h1>
      <button onClick={handleAdd}>Add me</button>
      <button onClick={handleRemove}>Remove me</button>
      <p>{counter}</p>
      <p>{appfooter}</p>
    </>
  )
}

export default App

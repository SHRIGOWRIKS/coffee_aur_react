
import { useEffect, useState } from 'react'
import './App.css'
import { useCallback,useRef } from 'react';

function App() {
  //Need state to look and change the differnce of data
  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState('');


  //useref hook for refering to something

const passwordRef=useRef(null);


  const passwordGenerator=useCallback(()=>{
    let finalPassword='';
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let num='0123456789'
    let specialChar='!@#$%^&*()_+?><~`[]{}'

    if(numberAllowed) str+=num;
    if(charAllowed) str+=specialChar;

    for (let i = 1; i <=length; i++) {
   let finalPasswordIndex=Math.floor(Math.random()*str.length+1);//We got random index
   console.log('password',finalPasswordIndex)
   finalPassword+=str.charAt(finalPasswordIndex)//using charAt can find the character of all indexes
   setPassword(finalPassword)
      
    }

  },[length,numberAllowed,charAllowed,setPassword])

  const passwordCopyToClipboard=useCallback(()=>{
    passwordRef?.current.select()
    window.navigator.clipboard.writeText(password)
    alert('copied')
  },[password])

  useEffect(()=>{
passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
  <div className='w-full h-screen' style={{backgroundColor:'#ff0043'}}>
    <h1 className='text-4xl text-white text-center mb-16 py-5'>Password Generator</h1>
  <div className='max-w-lg h-64 flex gap-5 relative justify-center px-4 text-white top-12 m-auto rounded-lg' style={{backgroundColor:'gray'}}>
      
    
      <input className='w-72 h-8 absolute top-3 left-3 p-3 text-orange-400 outline-none rounded-lg' ref={passwordRef} type="text" value={password} name='password' placeholder='Password' readOnly></input>
      <button className='w-14 h-8 absolute top-3 right-8 rounded-full' onClick={passwordCopyToClipboard} style={{backgroundColor:'blue'}}>Copy</button>
      <input className='cursor-pointer 'type="range"  value={length} min="6" max="100" onChange={(e)=>setLength(e.target.value)}/>
      <p className='relative left-0 m-auto text-orange-400'>Length:{length}</p>
      <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>setNumberAllowed((prev)=>!prev)}/>
      <p className='m-auto relative left-0 text-orange-400'>Numbers</p>
      <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={()=>setCharAllowed((prev)=>!prev)}/>
      <p className='m-auto relative left-0 text-orange-400'>Characters</p>
    
      
      

  </div>
  </div>
  )
}

export default App


import { useState } from 'react'
import './App.css'

function App() {
  
const [color,setColor]=useState('olive');


  return (
    <div className='w-full h-screen duration-20'
    style={{backgroundColor:color}}>
      <p className='text-white flex flex-row m-auto justify-center align-middle py-12'>Click me !!To choose your fav color😉😉</p>
      <div className='fixed flex flex-wrap justify-center bottom-8 inset-x-0 px-2 overflow-y-scroll'>
<div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2'>
  <button onClick={()=>setColor('violet')} className='outline-none  py-1 px-4 shadow-lg rounded-full cursor-pointer text-white' style={{backgroundColor:'violet'}}>Violet</button>
  <button onClick={()=>setColor('indigo')}  className='outline-none  py-1 px-4 shadow-lg rounded-full cursor-pointer text-white' style={{backgroundColor:'indigo'}}>Indigo</button>
  <button onClick={()=>setColor('blue')}  className='outline-none  py-1 px-4 shadow-lg rounded-full cursor-pointer text-white' style={{backgroundColor:'blue'}}>Blue</button>
  <button onClick={()=>setColor('green')}  className='outline-none  py-1 px-4 shadow-lg rounded-full cursor-pointer text-white' style={{backgroundColor:'green'}}>Green</button>
  <button onClick={()=>setColor('orange')}  className='outline-none  py-1 px-4 shadow-lg rounded-full cursor-pointer text-white' style={{backgroundColor:'orange'}}>Orange</button>
  <button onClick={()=>setColor('red')}  className='outline-none  py-1 px-4 shadow-lg rounded-full cursor-pointer text-white' style={{backgroundColor:'red'}}>Red</button>
  <button onClick={()=>setColor('pink')} className='outline-none  py-1 px-4 shadow-lg rounded-full cursor-pointer text-white' style={{backgroundColor:'pink'}}>Pink</button>
  <button onClick={()=>setColor('brown')} className='outline-none  py-1 px-4 shadow-lg rounded-full cursor-pointer text-white' style={{backgroundColor:'brown'}}>Brown</button>
  <button onClick={()=>setColor('black')} className='outline-none  py-1 px-4 shadow-lg rounded-full cursor-pointer text-white' style={{backgroundColor:'black'}}>Black</button>
  <button onClick={()=>setColor('white')} className='outline-none  py-1 px-4 shadow-lg rounded-full cursor-pointer text-black' style={{backgroundColor:'white'}}>White</button>
  <button onClick={()=>setColor('purple')} className='outline-none  py-1 px-4 shadow-lg rounded-full cursor-pointer text-white' style={{backgroundColor:'purple'}}>Purple</button>
  <button onClick={()=>setColor('magenta')} className='outline-none  py-1 px-4 shadow-lg rounded-full cursor-pointer text-white' style={{backgroundColor:'magenta'}}>Magenta</button>
  <button onClick={()=>setColor('lightslategray')}  className='outline-none  py-1 px-4 shadow-lg rounded-full cursor-pointer text-white' style={{backgroundColor:'lightslategray'}}>lightslategray</button>
  <button onClick={()=>setColor('lightcoral')}  className='outline-none  py-1 px-4 shadow-lg rounded-full cursor-pointer text-white' style={{backgroundColor:'lightcoral'}}>LightCoral</button>
</div>
      </div>
    </div>
  )
}

export default App

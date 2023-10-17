import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
  const data=useLoaderData()
  // const [data,setData]=useState([]);
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/SHRIGOWRIKS')
  //   .then((response)=>response.json())
  //   .then((data)=>setData(data))
  //   },[data])
  
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Repositories:{data.public_repos}

      <img src={data.avatar_url} alt='image' width={200}/>
      
    </div>
  )
}



export const githubInfo=async()=>{
  const response=await fetch('https://api.github.com/users/SHRIGOWRIKS');
  return response.json();
}



export default Github

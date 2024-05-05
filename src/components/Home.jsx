import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
function Home() {
   const [input ,setInput]= useState('')
   const navigate = useNavigate()
   const handleSubmit = () => {
    if (input) {
        navigate(`/room/${input}`);
    } else {
        console.error("Input is empty or undefined");
    }
     
}

  return (
    <div className='w-full h-screen bg-zinc-800 flex justify-center items-center bg-[url(https://images.unsplash.com/photo-1502754388-a9bce5374fb8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-no-repeat bg-center bg-cover' >

       <div className=' bg-[#ffffff12] justify-center items-center px-5 lg:px-[50px] py-[100px] rounded-lg backdrop-blur-[10px] border-[.2px] border-[#ffffff1f]  flex flex-col gap-3 '>
            <h1 className='text-[#ffffffa8] text-[18px] '>Enter Your Name Or Email To Join Metting </h1>
            <input placeholder='Enter Your Name' className='px-2 rounded-md py-1 outline-none border-none  w-60' value={input} onChange={(e)=>setInput(e.target.value)} type="text" />
            <button className='bg-blue-500 w-[150px] rounded-md text-[20px] font-medium py-1' onClick={handleSubmit} >Join Now</button>
        </div>
    </div>
  )
}

export default Home
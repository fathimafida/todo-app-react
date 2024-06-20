import React from 'react'
import { useNavigate } from 'react-router-dom'


const NavBar = () => {
    const navigate = useNavigate()
  return (
    <div className='flex justify-center gap-6 bg-white p-4 hover:scale-y-105'>
      <h1 className='text-xl transition-all duration-300  hover:text-blue-500  font-bold cursor-pointer border-2 bg-white p-2 border-radium rounded'onClick={()=>{navigate("/")}}>
        ToDo</h1>
        <h1 className='text-xl transition-all  duration-300  hover:text-blue-500  font-bold cursor-pointer border-2 bg-white p-2 border-radium rounded 'onClick={()=>{navigate("/posts")}}>
        Posts</h1>
    </div>
  )
}

export default NavBar

import React from 'react'
import {Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import Todo from './Pages/Todo/Todo'
import Posts from './Pages/Posts/Posts'
const App = () => {
  return (
  <>
  <NavBar/>
   <Routes>
      <Route path="/" element={<Todo/>}></Route>
      <Route path="/posts" element={<Posts/>}></Route>
    </Routes>
  </>
  )
}

export default App

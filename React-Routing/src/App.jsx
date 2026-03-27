import React from 'react'
import Navbar from './Components/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Components/Contact'
import Register from './Components/Register'
import Card from './Card'
import Home from './Components/Home'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/card" element={<Card/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
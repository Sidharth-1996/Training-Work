import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Auth from '../Components/Auth'
import Register from '../Components/Register'
import Login from '../Components/Login'
import Navbar from '../Components/Navbar'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth' element={<Auth/>}>
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
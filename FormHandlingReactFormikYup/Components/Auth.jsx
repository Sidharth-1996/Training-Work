import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <>
      <div className='container my-4 '>
        <div className='d-flex justify-content-around'>
          <Link className='btn btn-outline-info' to="register">Register</Link>
          <Link className='btn btn-outline-info' to="login">Login</Link>
        </div>

        <div className='my-4'>
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default Auth
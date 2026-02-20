import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [userName,setUserName] =useState("")
    const [password,setPassword]=useState("")

    const handleSubmit= (e) =>{
        
    }
  return (
    <div>
        <div className="container">
            <form onSubmit={handleSubmit} className="m-auto border border-5 border-dark w-50 p-5 rounded-4">
                <p className='fs-2'>Login</p>
                <div className="mb-3 mt-3">
                    <label htmlFor=""></label>
                </div>
            </form>
        </div>


    </div>
  )
}

export default Login
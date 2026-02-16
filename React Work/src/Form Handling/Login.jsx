import React, { useState } from 'react'

const Login = () => {
    const [userName,setUserName]=useState("")
    const [password,setPassword]=useState("")

    const handleUseName=(e)=>{
        setUserName(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(userName);
        console.log(password);
    }
  return (
    <div>
        <div className="container">
            <form onSubmit={handleSubmit} className="m-auto">
                <p>Login</p>
                <div className="">
                    <label htmlFor="" className="">User Name</label>
                    <input type="text" value={userName} onChange={handleUseName} placeholder='User Name' className='form-control'/>
                </div>
                <div className="">
                    <label htmlFor="" >Password</label>
                    <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className='form-control'/>
                </div>
                <div className="">
                    <input type='submit' value="login" className='btn btn-success'/> 
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
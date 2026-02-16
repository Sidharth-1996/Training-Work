import React, { useState } from 'react'

const Register = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    phone: ""
  })

  const handleChange=(e)=>{
    const {name,value}=e.target
    console.log(name, " : ",value)
    setFormData((prev)=>({...prev,[name]:value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="container m-auto">
        <p className="">Register</p>
        <div className="">
          <label htmlFor="">Name</label>
          <input type="text" placeholder='Name' className='form-control' 
          value={formData.fname}
          name='fname'
          onChange={handleChange}/>
        </div>
        <div className="">
          <label htmlFor="">Email</label>
          <input type="text" placeholder='Email' className='form-control'
            name='email'
            value={formData.email}
            onChange={handleChange} />
        </div>
        <div className="">
          <label htmlFor="" className=''>Phone</label>
          <input type="text" placeholder='Phone number' className='form-control' 
              name='phone'
              value={formData.phone}
              onChange={handleChange} />
        </div>
        <div className="">
          <label htmlFor="" className=''>Password</label>
          <input type="text" placeholder='******' className='form-control'
            name='password'
            value={formData.password}
            onChange={handleChange} />
        </div>
        <div className="">
          <input type="Submit" value="Login" className='btn btn-success'/>
        </div>
      </form>
    </div>
  )
}

export default Register


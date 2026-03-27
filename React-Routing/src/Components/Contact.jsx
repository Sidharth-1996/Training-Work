import React, { useState } from 'react'

const Contact = () => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        mes:"",
    })
    
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value,
        }))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
    }
  return (
    <>
    <div className="container my-5">
        <form >
            <h1 className=''>Contact</h1>
            <label htmlFor="" className='for-control'>Name : </label>
            <input className="form-control" type='name' name='name' placeholder='Sidharth Sharma' value={formData.name} onChange={handleChange}></input>

            <label htmlFor="" className='for-control'>Email Id : </label>
            <input className="form-control" type='email' name='email' placeholder='sid@example.com' value={formData.email} onChange={handleChange}></input>

            <label htmlFor="" className='for-control'>Message : </label>
            <textarea rows="4" cols="50" placeholder='Start writing .....' name='mes' value={formData.mes} onChange={handleChange}></textarea>

            <input className="form-control btn btn-success" type='button'  value='Submit' onClick={handleSubmit}></input>
        </form>
    </div>
    </>
  ) 
}

export default Contact
import { useFormik } from 'formik'
import React from 'react'
import { registerValidator } from './Validator'
import axios from 'axios'

const Register = () => {
    const initialState={
        fname:"",
        email:"",
        phone:"",
        pass:"",
        Cpass:""
    }

    const {values,handleChange,handleSubmit,touched,handleBlur,errors}=useFormik({
        initialValues:initialState,

        validationSchema:registerValidator,

        onSubmit:(values)=>{
            console.log(values);
            axios.post("http://localhost:3000/users",values).then(()=>{
                alert("Data added successfully");
            })
        }
    })
  return (
    <>
    <div style={{width:500} }>
        <div className="container">
        <form onSubmit={handleSubmit}>
        <label htmlFor='' className='mx-1 my-1'>Name : </label>
        <input type='text' name='fname' className='form-control' placeholder='Sidharth Sharma'
        value={values.fname}
        onChange={handleChange}
        onBlur={handleBlur}/>
        {touched.fname && errors.fname && <p style={{color:"red"}}>{errors.fname}</p>}
        <label htmlFor='' className='mx-1 my-1'>E-mail : </label>
        <input type='email' name='email' className='form-control' placeholder='sharmasidharth784@gmail.com'
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}/>
        {touched.email && errors.email && <p style={{color:"red"}}>{errors.email}</p>}
        <label htmlFor='' className='mx-1 my-1'>Phone : </label>
        <input type='text' name='phone' className='form-control' placeholder='98xxxxxxxx'
        value={values.phone}
        onChange={handleChange}
        onBlur={handleBlur}/>
        {touched.phone && errors.phone && <p style={{color:"red"}}>{errors.phone}</p>}
        <label htmlFor='' className='mx-1 my-1'>Password : </label>
        <input type='password' name='pass' className='form-control' placeholder='*******'
        value={values.pass}
        onChange={handleChange}
        onBlur={handleBlur}/>
        {touched.pass && errors.pass && <p style={{color:"red"}}>{errors.pass}</p>}
        <label htmlFor='' className='mx-1 my-1'>Confirm Password : </label>
        <input type='password' name='Cpass' className='form-control' placeholder='*******'
        value={values.Cpass}
        onChange={handleChange}
        onBlur={handleBlur}/>
        {touched.Cpass && errors.Cpass && <p style={{color:"red"}}>{errors.Cpass}</p>}
        <input type='submit' className='btn btn-success my-2' value={"Submit"}/>
    </form>
    </div>
    </div>
    
    
    </>
  )
}

export default Register
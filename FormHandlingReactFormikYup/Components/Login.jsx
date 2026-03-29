import { useFormik } from 'formik';
import React from 'react'
import { loginValidator } from './Validator';

const Login = () => {
    const initialState=
        {
            email:"",
            phone:"",
            pass:"",
        } 

    const {values,handleChange,handleSubmit,errors,touched,handleBlur} =useFormik({
        initialValues:initialState,

        validationSchema:loginValidator,

        onSubmit:(values)=>{
            console.log(values)
        }
    })
    return (
        <>
            <div className="container w-50">
                <form onSubmit={handleSubmit}>
                    <label htmlFor='' className='mx-1 my-1'>Email : </label>
                    <input type='email' placeholder='john@gmail.com' name='email' className='form-control'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                    {touched.email && errors.email && <p style={{color:'red'}}>{errors.email}</p>}
                    <label htmlFor='' className='mx-1 my-1'>Phone : </label>
                    <input type='text' placeholder='98xxxxxxxx' name='phone' className='form-control' 
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                    {touched.phone && errors.phone && <p style={{color:'red'}}>{errors.phone}</p>}
                    <label htmlFor='' className='mx-1 my-1'>Password : </label>
                    <input type='text' placeholder='***********' name='pass' className='form-control'
                    value={values.pass}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                    {touched.pass && errors.pass && <p style={{color:'red'}}>{errors.pass}</p>}

                    <input type='submit' className='btn btn-success my-2' />
                </form>
            </div>
        </>
  )
}

export default Login

import React, { useState } from 'react'

const Register = () => {

    const [formData, setFormData] = useState({
        fname: "",
        phone: "",
        email: "",
        password: ""
    })
    const handleChange= (e)=>{
        const {name, value} = e.target
        setFormData((preVal)=>({...preVal,[name]:value}))
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formData);
        
    }

    return (
        <div className="container" style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <form className='bg-dark text-light w-50 p-5 border border-5 border-success' onSubmit={handleSubmit} >
                <p className='fs-3 fw-bold border-bottom border-5 border-success rounded-pill text-center'> Register </p>
                <div className="mb-3">
                    <label htmlFor="" className='fs-6 fw-bold'> Full Name </label>
                    <input type="text" className="form-control"
                        value={formData.fname}
                        name='fname'
                        onChange={handleChange}
                    />
                </div>


                <div className="mb-3">
                    <label htmlFor="" className='fs-6 fw-bold'> Email </label>
                    <input type="text" className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        name='email'
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className='fs-6 fw-bold'> Phone </label>
                    <input type="text" className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                        name='phone'
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className='fs-6 fw-bold'> Password </label>
                    <input type="text" className="form-control"
                        value={formData.password}
                        onChange={handleChange}
                        name='password'
                    />
                </div>
                <div className="mb-3">
                    <input type="submit" value="Register" className="btn btn-success" />
                </div>
            </form>
        </div>
    )
}

export default Register;
import React, { useState } from 'react'

const Card = () => {
    const [userdata,setUserdata]=useState({
        name:"",
        profile:"",
        desg:"",
    })

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUserdata((prev)=>({
            ...prev,
            [name]:value,
        }))

    }

    const handleSubmit=(e)=>{
        if(userdata.name&&userdata.profile&&userdata.desg){
            alert("Success, Data entered Successfully!");
        }
        else{
            alert("Please fill all the data!")
        }
    }
  return (
    <>
    <div className="container my-5">
        <div className="row">
            <div className="col-md-6">
                <form>
                    <label htmlFor="">Name : </label>
                    <input type='text' name='name' value={userdata.name} placeholder='Sidharth Sharma' className='form-control' onChange={handleChange}/>
                    <label htmlFor="">Profile url : </label>
                    <input type='text' name='profile' value={userdata.profile} placeholder='https://www.imagepicker.com/1' className='form-control' onChange={handleChange}/>
                    <label htmlFor="">Designation : </label>
                    <input type='text' name='desg' value={userdata.desg} placeholder='Full Stack Developer' className='form-control' onChange={handleChange}/>
                    <input type='button'  value='Submit'  className='btn btn-success' onClick={handleSubmit}/>
                </form>
            </div>
            {(userdata.name && userdata.profile && userdata.desg) &&(
                <div className="col-md-6">
                <div className="container">
                    <div className="card text-center">
                        <div className="card-header"><img className='image-fluid' style={{width:200,height:200}} src={userdata.profile}/></div>
                        <div className="card-body">{userdata.name}</div>
                        <div className="card-footer">{userdata.desg}</div>
                    </div>
                </div>
            </div>
            )}
            
        </div>
        
    </div>
    
    </>
  )
}

export default Card
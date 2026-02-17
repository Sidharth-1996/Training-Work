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

//Practise way-1
// import { useState } from "react";

// const Login=()=>{
//     const [name,setName]=useState("")
//     const [password,setPassword]=useState("")

//     const handleChange=(e)=>{
//         setName(e.target.value)
//     }

//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         console.log("Name : ",name)
//         console.log("Password : ",password)
//     }
//     return(
//         <>
//         <form onSubmit={handleSubmit} className="m-auto">
//             <p>Login</p>
//             <div className="">
//                 <label htmlFor="">Name : </label>
//                 <input type="text" placeholder="Name" value={name} onChange={handleChange}/>
//             </div>
//             <div className="">
//                 <label htmlFor="">Password : </label>
//                 <input type="password" className="for-control" placeholder="*****"  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
//             </div>
//             <div className="">
//                 <input type="submit" value="Login" className="btn btn-success"/>
//             </div>
//         </form>
//         </>
//     )
// }

// export default Login;


//Practise way-2

// import React, { useState } from 'react'

// const Login = () => {
//     const [userName,setUSerName]=useState("")
//     const [password,setPassword]=useState("")

//     const handleChange=(e)=>{
//         const {name,value}=e.target;

//         switch(name){
//             case "userName":
//                 setUSerName(value);
//                 break;
            
//             case "password":
//                 setPassword(value);
//                 break;
//         }
//     }

//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         console.log("UserName : ",userName," Password : ",password)
//     }
//     return (
//         <div>
//             <div className="container-fluid">
//                 <form onSubmit={handleSubmit}>
//                     <p>Login</p>
//                     <div className="">
//                         <label htmlFor="">User Name : </label>
//                         <input type="text" name="userName" value={userName} placeholder='User Name' onChange={handleChange} className='form-control'/>
//                     </div>

//                     <div className="">
//                         <label htmlFor="">Password : </label>
//                         <input type="text" name="password" value={password} placeholder='******' onChange={handleChange} className='form-control'/>
//                     </div>

//                     <div className="">
//                         <input type="submit" value="Login" className='btn btn-success' />
//                     </div>

//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Login
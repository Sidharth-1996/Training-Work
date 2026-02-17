import React, { useEffect, useState } from 'react'

const EffectWork = () => {
    const [count,setCount]=useState(0)
    const [name,setName]=useState("Raman")

    useEffect(()=>{
        console.log("Working on each effect !!!");
    },[name])
  return (
    <div>
        <button className="btn btn-info">
            <span className="" onClick={()=>setCount(count -1)}>-</span>
            <span className="">{count}</span>
            <span className="" onClick={()=>setCount(count+1)}>+</span>
        </button>

        <div className="">
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
    </div>
  )
}

export default EffectWork

//Practise
// import React, { useEffect, useState } from 'react'

// const EffectWork = () => {

//     const [count,setCount]=useState(0)
//     const [name,setName]=useState("Raman")

//     useEffect(()=>{
//         console.log("Working on each effect")
//     },[name])

    
//   return (
//     <div>
//         <div className="container-fluid">
//             <button className="btn btn-success m-auto">
//                 <span onClick={()=>{if(count>0){setCount(count-1)}}} className='mx-2'>-</span>
//                 <span className='mx-2'>{count}</span>
//                 <span onClick={()=>{if(count<=100){setCount(count+1)}}} className='mx-2'>+</span>
//             </button>
//         </div>

//         <div className="container">
//             <input type="text"  value={name} className='form-control' onChange={(e)=>{setName(e.target.value)}}/>
//         </div>
//     </div>
//   )
// }

// export default EffectWork
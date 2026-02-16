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
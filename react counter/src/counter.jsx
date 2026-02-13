import { useState } from "react"

const Counter=()=>{

    const [count,setCount]=useState(1)
    const [isAdded,setIsAdded]=useState(false)

    const minusNum=()=>{
        if(count<=1){
            console.log(count);

            setIsAdded(false)
        }
        else{
            setCount(count -1)
        }
            
    }

    const plusNum=()=>{
        if(count==5){
            alert("You can't add more of this item")
        }
        else{
            setCount(count+1)
        }
    }
    let amount = 42;
    if(count>=1){
        amount=amount*count;
    }
    return(
        <>
        <div className="container w-25 m-auto">
            <div className="card">
                <div className="card-header">
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b73861e0-2b53-4f7e-86d3-904e468d0478.png" alt="" />
                </div>
                <div className="card-body">
                    <p>4700BC Cheese & Herbs Corn Popped Chips </p>
                </div>
                <div className="card-footer d-flex     justify-content-between">
                    <span>₹{amount}</span>
                    {
                        isAdded ? <button className="btn btn-outline-success">
                              <div className="d-flex align-items-center gap-3">
                            <div className="mx-2 fw-bold" onClick={minusNum}>-</div>
                            <div className="mx-2 fw-bold">{count}</div>
                            <div className="mx-2 fw-bold" onClick={plusNum}>+</div>
                            </div>
                        </button>:
                        <button className="btn btn-success" onClick={()=> setIsAdded(true)}>Add to cart</button>
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Counter;
import { useState } from "react";

const ToggleList =()=>{
    const [toggle,setToggle]= useState(false);
    const handleToggle =()=>{
        setToggle(!toggle);
    }
    return(
        <>
        <div className="text-center">
            <button className="btn btn-success" onClick={handleToggle}>Show Required Doccumnets</button>
        </div>
        {toggle &&(
            <div className="container-fluid">
            <h1 className="fw-bold text-decoration-underline">Documents Required</h1>
            <div className="list">
                <ul>
                    <li>Adhaar Card</li>
                    <li>Pan Card</li>
                    <li>Marksheets</li>
                    <li>ID-Card</li>
                    <li>Cheque</li>
                </ul>
            </div>
        </div>
        )}
        
        
        </>
    )
}

export default ToggleList;

// /* 2nd way */
// const ToggleList =()=>{
//     const [toggle,setToggle]=useState(false);
//     const handleToggle =()=>{
//         setToggle(!toggle);
//     }
//     let content;
//     if(toggle){
//         content=<div className="container-fluid">
//             <h1 className="fw-bold text-decoration-underline">Documents Required</h1>
//             <div className="list">
//                  <ul>
//                      <li>Adhaar Card</li>
//                      <li>Pan Card</li>
//                      <li>Marksheets</li>
//                      <li>ID-Card</li>
//                      <li>Cheque</li>
//                  </ul>
//              </div>
//          </div>
//     }

//     return(
//         <>
//         <div className="text-center">
//             <button className="btn btn-success" onClick={handleToggle}>Show Required Doccuments</button>
//         </div>
//         {content}
//         </>
//     )
// }

// export default ToggleList;
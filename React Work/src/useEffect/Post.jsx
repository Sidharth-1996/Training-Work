import React, { useEffect, useState } from 'react'

const Post = () => {
    const [blog, setBlog] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json()).then((val)=>{
            console.log(val);
            setBlog(val);
        })
    },[])
    return (
        <div>
            <div className="">
                <div className="row">
                    {
                        blog.map((val,index)=>{
                            return <div className="col-3">
                                <div className="card-header">
                                    {val.title}
                                </div>
                                <div className="card-body">
                                    {val.body}
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Post

//Practise
// import React, { useEffect, useState } from 'react'

// const Post = () => {
//     const [blogData, setBlogData] = useState([])

//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json()).then((val)=>{
//             console.log(val)
//             setBlogData(val)
            
//         })
//     },[])
//     return (
//         <div>
//             <div className="container">
//                 <div className="row">
//                     {
//                         blogData.map((value) => {
//                             return (
//                                 <div className="col-3" key={value.index}>
//                                     <div className="card">
//                                         <div className="card-header">{value.title}</div>
//                                         <div className="card-body">{value.body}</div>
//                                     </div>

//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Post
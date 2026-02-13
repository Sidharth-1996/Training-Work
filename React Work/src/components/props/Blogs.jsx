import BlogCard from "./BlogCard";
import { blogData } from "./blogData";

const Blogs = ()=>{
    return(
        <>
            <div className="container my-5">
                <div className="row g-4">
                    {
                        blogData.map((val,index) =>{
                            return(
                                <div className="col-4" key={index}>
                                    <BlogCard title={val.title} userIdentity={val.userId} body={val.body}></BlogCard>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Blogs;
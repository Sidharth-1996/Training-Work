const BlogCard=(prop)=>{
    return(
        <>
            <div className="card text-center">
                <div className="card-header fs-6 fw-bold">
                    {prop.title.slice(0,25).toUpperCase()}
                </div>
                <div className="card-body">
                    <p>{prop.body.slice(0,60)}</p>
                </div>
                <div className="card-footer fw-bold fst-italics">
                    {prop.userIdentity}
                </div>
            </div>
        </>
    )
}

export default BlogCard;
import { blogData } from "./blogData";
import TableBody from "./TbaleBody";


const BlogTable=()=>{
    return (
        <>
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>User Id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blogData.map((val,index)=>{
                            return <TableBody title={val.title} userId={val.userId} id={val.id} body={val.body} key={index}/>
                        })
                    }

                </tbody>
            </table>
        </div>
        </>
    )
}
export default BlogTable;
const TableBody=({title,body,id,userId}) =>{
    return(
        <>
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{body}</td>
                <td>{userId}</td>
            </tr>
        </>
    )
}

export default TableBody;
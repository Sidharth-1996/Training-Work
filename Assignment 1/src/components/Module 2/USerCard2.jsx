
const UserCard2 =(prop)=>{
    return(
        <>
        <div className="container-fluid">
            <div className="card text-center">
                <div className="card-header"><h1>{prop.name.toUpperCase()}</h1></div>
            <div className="card-body"><span>UserId : {prop.id}</span><br/><span>Password : {prop.pass}</span></div>
            <div className="card-footer">
                <button className="btn btn-danger" onClick={()=>prop.del(prop.id)}>
                    Delete User
                </button>
                </div>
            </div>
            
        </div>        
        </>
    )
}

export default UserCard2;
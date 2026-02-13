const UserCard =({
    avatar= "https://i.imgur.com/LDOO4Qs.jpg",
    name="Unknown User",
    role="User"
}) =>{
    return(
        <>
        <div className="conatiner-fluid">
            <div className="card text-center border-1 my-4">
                <div className="car-header"> <img src={avatar} alt="" style={{height:"200px" ,width:"200px",border:"2px solid",marginTop:"20px"}}/></div>
                <div className="card-body fw-bold">{name.toUpperCase()}</div>
                <div className="card-footer">{role}</div>
            </div>
        </div>
        </>
    )
}

export default UserCard;
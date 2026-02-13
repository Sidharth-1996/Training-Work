import UserCard3 from "./UserCard3";

const ObjectProp=()=>{

    const user={
        id: 1,
        name: "Sidharth",
        email: "test@example.com",
        role: "Admin",
    };

    return(
        <>

        <div className="container-fluid  d-flex justify-content-center">

            <div className="card text-center" style={{width:"350px"}}>
            <h2>User Details</h2>

        <UserCard3 id={user.id} name={user.name} email={user.email} role={user.role}></UserCard3>
        </div>
        
        </div>
        
        
        </>
    )
}

export default ObjectProp;
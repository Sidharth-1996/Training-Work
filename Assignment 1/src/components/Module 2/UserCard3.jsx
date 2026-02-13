import React from 'react'

const UserCard3 = ({ id, name, email, role }) => {
    return (
        <div>
            <div className="container-fluid">
                <div className="card text-center">
                    <div className="card-header"><h1>{name.toUpperCase()}</h1></div>
                    <div className="card-body"><span>UserId : {id}</span><br /><span>E-mail : {email}</span></div>
                    <div className="card-footer">
                        <span>{role}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserCard3;
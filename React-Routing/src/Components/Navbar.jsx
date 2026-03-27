import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const navData=[{
        pathName:"Contact",
        path:"/contact"},{
            pathName:"Register",
            path:"/register"
        },{
            pathName:"Card",
            path:"/card"
        }]
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {
                                navData.map((val,index)=>{
                                    return(
                                        <Link className="nav-link " aria-current="page" to={val.path} key={index}>{val.pathName}</Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar


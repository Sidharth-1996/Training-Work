import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const headerData=["Home","About","Services"]
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {
                                headerData.map((val,index)=>{
                                    return(
                                        <Link className="nav-link active" aria-current="page" to={`/${val.toLowerCase()}`} key={index}>{val}</Link>
                                        // <a className="nav-link active" aria-current="page" href={`/${val.toLowerCase()}`} key={index}>{val}</a>
                                    )
                                        
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
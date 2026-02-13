const Header = () => {
    let navData = [
        "Home",
        "About",
        "Service",
        "Career",
        "Blogs",
        "Contact"
    ]

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            {
                                navData.map((val, index) => {
                                    return <li className="nav-item" key={index}>
                                        <a className="nav-link active" aria-current="page" href="#" >{val}</a>
                                    </li>
                                })
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header;
const StyleComponent = () =>{
    return (
        <>
        <div className="container-fluid">
            <div className="header">
                <h1 style={{color:"red",textAlign:"center"}}>Hey, I'm inline style. </h1>
            </div>
            <div className="body"><p className="lead">Hi, i am body. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error eveniet cupiditate, provident incidunt sapiente unde alias ipsam mollitia ipsa quidem tempore, itaque maxime, aliquid totam deserunt molestiae optio iure ducimus odit placeat voluptates? Repellat assumenda, fugit molestias explicabo placeat temporibus sed obcaecati iusto reprehenderit iste eligendi in impedit dolorum officiis?</p></div>
            <div className="footer"><span className="text-primary fw-bold fs-5 fst-italic">Hiii!!, i'm footer.</span></div>
        </div>
        </>
    )
}

export default StyleComponent;
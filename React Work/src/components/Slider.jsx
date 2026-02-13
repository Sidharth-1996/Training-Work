const Slider = () => {
    let imgData=["https://imgs.search.brave.com/3rEtBNhEAQKW6ChCSdv6LxjZdQatxzdxxDl65uaOmCM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE2/NDg4NTMyOS9waG90/by9nZXR0aW5nLWxv/c3QtaW4tdGhlLWNv/ZGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXdLV2dEMHgw/dHpocnFvRmJJQVF2/dWxOVHhWV1pvc2Ro/NXJxX2xnLXIyODQ9","https://imgs.search.brave.com/w2VNttfjOw2Yh5FOtH9H0vYlK_brLud0tXwMVhBFZFI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/b2RlLWNvZGluZy1w/cm9ncmFtbWluZy10/ZWNobm9sb2d5LXRl/Y2huaWNhbC1jb25j/ZXB0XzUzODc2LTEy/MDQzNi5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA","https://imgs.search.brave.com/TIqs-q2jJY7E2QJ4ct6UmVzEg1i6r8VTloogL7Ca0fw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/NDU4Lzk2MC9zbWFs/bC90aGUtaGFuZHMt/aG9sZGluZy1jb2Rp/bmctYW5kLXJlbGF0/ZWQtdGV4dC1jb21w/dXRlci1lZmZlY3Qt/cGhvdG8uSlBH"]

    let [i1,i2,i3]=imgData
    return (
        <>
             <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={i1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={i2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={i3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
export default Slider;
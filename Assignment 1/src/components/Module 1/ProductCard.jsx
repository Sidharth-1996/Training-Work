const ProductCard = (prop) =>{
    return(
        <>
        <div className="card text-center border-1 my-4">
            <div className="car-header fw-bold my-2">{prop.title.slice(0,25).toUpperCase()}</div>
            <div className="card-body fs-8 fst-italic">{prop.des.slice(0,100)}</div>
            <div className="card-footer fw-bold">{prop.price}</div>
        </div>
        </>
    )
}

export default ProductCard;
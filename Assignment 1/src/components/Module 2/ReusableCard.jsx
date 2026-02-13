const ReusableCard=({children})=>{
    return(
        <>
        <div style={{border:"2px solid", borderRadius:"12px",padding:"20px" ,margin:"20px"}}>
            {children}
        </div>
        </>
    )
}

export default ReusableCard;
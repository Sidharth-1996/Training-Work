const DynamicGreetings = ()=> {
    const now=new Date();
    const hour=now.getHours();
    let greet=""
    if(hour>=5 && hour<=11){
        greet="Good Morning";
    }
    else if(hour>=12 && hour <=16){
        greet="Good Afternoon";
    }
    else if(hour>=17 && hour <=20){
        greet="Good Evening";
    }
    else{
        greet="Good Night";
    }

    return(
        <>
        <h1 className="fw-bold  text-center">{greet}</h1>
        </>
    )
}

export default DynamicGreetings;
import Footer from "./Footer";
import Header from "./Header";
import Slider from "./Slider";
import BlogTable from "./props/BlogTable";
import Blogs from "./props/Blogs";

const Home= ()=>{
    return(
        <>
        <Header/>
        <Slider/>
        <Blogs/>
        <BlogTable/>
        <Footer/>

        </>
    )
}

export default Home;
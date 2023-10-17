import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Body(){
    return(
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Body;
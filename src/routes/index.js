import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import Body from "../components/Body";
import ContactScreen from "../screens/ContactScreen";
import AboutScreen from "../screens/AboutScreen";
import ListScreen from "../screens/ListScreen";


function RootRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Body/>} path="/">
                    <Route element={<HomeScreen />} path="/" />
                    <Route element={<ContactScreen/>} path="/contato"/>
                    <Route element={<AboutScreen/>} path="/sobre"/>
                    <Route element={<ListScreen/>} path="/lista"/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RootRouter;
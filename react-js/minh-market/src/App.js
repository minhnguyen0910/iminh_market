import React from "react";
import {Home} from "./components/home/Home";
import {Login} from "./components/login/Login";
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Cart} from "./components/cart/Cart";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Detail} from "./components/detail/Detail";
import {Route, Routes} from "react-router";
function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/detail/:id" element={<Detail/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;

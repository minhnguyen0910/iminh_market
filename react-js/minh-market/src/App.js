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
import {Order} from "./components/cart/ConfirmOrder";
import {Introduce} from "./components/introduce/Introduce";
import {Policy} from "./components/policy/Policy";
import {ListProduct} from "./components/list/ListProduct";
import {Historys} from "./components/infor/Historys";
import {Information} from "./components/information/Information";
import {Error} from "./components/404/Error";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/detail/:id" element={<Detail/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/confirm" element={<Order/>}/>
                <Route path="/introduce" element={<Introduce/>}/>
                <Route path="/policy" element={<Policy/>}/>
                <Route path="/list-product" element={<ListProduct/>}/>
                <Route path="/history" element={<Historys/>}/>
                <Route path="/information" element={<Information/>}/>
                <Route path='*' element={<Error/>} />
            </Routes>

        </>
    );
}

export default App;

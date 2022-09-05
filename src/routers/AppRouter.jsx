import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import ReservationPage from "../pages/ReseervationPage";
import MenuPage from "../pages/MenuPage";
import OrderPage from "../pages/OrderPage";
import AboutPage from "../pages/AboutPage"
import ProductPage from "../pages/ProductPage";

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <div className="container mt-5 pt-5">
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/menu" element={<MenuPage />}/>
                    <Route path="/reservation" element={<ReservationPage />}/>
                    <Route path="/cart" element={<CartPage />}/>
                    <Route path="/order" element={<OrderPage />}/>
                    <Route path="/about" element={<AboutPage />}/>
                    <Route path="/products" element={<ProductPage />}/>
                    <Route path="*" element={<Navigate to="/" />}/>
                </Routes>
            </div>
        </Router>
    );
};

export default AppRouter;
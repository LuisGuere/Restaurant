import React from "react";
import Order from "../components/Order";
import Products from "../components/Products";

const OrderPage = () => {
    return (
        <section className="container">
            <div className="row">
                <Order />
                <Products />     
            </div>
        </section>        
    );
};

export default OrderPage;
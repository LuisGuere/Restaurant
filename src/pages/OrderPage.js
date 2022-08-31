import React from "react";
import Order from "../components/Order";
import OrderCheck from "../components/OrderCheck";
import Products from "../components/Products";

const OrderPage = () => {
    return (
        <section className="container">
            <div className="row items-align-center">
                <OrderCheck /> 
            </div>
        </section>        
    );
};

export default OrderPage;
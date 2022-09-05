import React from "react";
import Order from "../components/Order";
import OrderCheck from "../components/OrderCheck";

const OrderPage = () => {
    return (
        <section className="container">
            <div className="row items-align-center">
                <Order />
            </div>
        </section>        
    );
};

export default OrderPage;
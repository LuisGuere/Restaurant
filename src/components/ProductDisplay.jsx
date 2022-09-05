import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import getProductApi from "../Apis/ProductApi";

const ProductDisplay = ({id, name, price, type}) => {
    const navigate = useNavigate();
    navigate("/products");
    
    return(
        <div>
            <h1>Product display</h1>
            <div className="col" key={id}>
            <h5 className="card-title">{name}</h5>
            <h5 className="card-title">{price}</h5>
            <h5 className="card-title">{type}</h5>
            </div>

        </div>
    )

}


export default ProductDisplay;
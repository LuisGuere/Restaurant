import React from "react";
import { createProductApi } from "../Apis/ProductApi";
import CreateProductModal from "./CreateProductModal";
//import db from "../firebase/firebase";
/*
const respData = async () =>{
    const response = await axios.get(db);
    console.log(response);
}
*/

const Products = () => {
    return (
        <CreateProductModal/>

    );
};

export default Products;
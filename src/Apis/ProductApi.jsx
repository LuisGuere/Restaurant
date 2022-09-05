import React from "react";
import { Form } from "react-bootstrap";
import { doc, collection, getDocs, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { initialValues } from "../components/CreateProductModal";




export const getProductApi = async (id) => {
    const product = await getDocs(collection( db, 'product'));
    return product;
}

export const deletProductApi = async () => {
    const product = await deleteDoc(collection( db, 'product'));
    return product;
}

export const createProductApi = async () => {
    const product = await setDoc(doc(db, 'product'), {
        
    }
)
    console.log(product);

}

export const updateProductApi = async () => {

}

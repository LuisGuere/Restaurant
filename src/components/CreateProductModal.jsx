import React, { useState, useRef} from "react";
import { createProductApi } from "../Apis/ProductApi";
import { useNavigate } from "react-router-dom";



export const initialState = {
    name: "",
    price: 0,
    type: ""
};

export const CreateProductModal = () => {

    const [productForm, setProductForm] = useState(initialState);
    const modalRef = useRef();
    const navigate = useNavigate();

    const createProduct = async () => {
        const resp = await createProductApi(productForm);
        const id = resp;
        navigate(`/products/${id}`);
    }

    return(

        <div className="container">
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Creación de producto.</button>
            <div className="offcanvas offcanvas-bottom" tabIndex={-1} id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel" ref={modalRef}>
                <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasBottomLabel">Rellena los campos que aparecen a continuación</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body small">
                    <div className="row">
                        <div className="col-6 mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Nombre del producto</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" value={productForm.name} onChange={(e)=> setProductForm({...productForm, name: e.target.value})}/>
                        <div id="productName" className="form-text">Ej. taco, quesadilla, torta, hamburguesa</div>
                        </div>
                        <div className="col-6 mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Precio del producto</label>
                        <input type="number" className="form-control" id="exampleInputEmail1" value={productForm.price} onChange={(e)=> setProductForm({...productForm, price: e.target.value})}/>
                        <div id="productName" className="form-text">ej. 10, 20, 30</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Especificación del producto</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" value={productForm.type} onChange={(e)=> setProductForm({...productForm, type: e.target.value})}/>
                        <div id="productName" className="form-text">Ej. Pastor, Pepperoni, Doble</div>
                        </div>
                        <div className="col-6 mb-3 mt-4">
                        <button type="button" className="btn btn-primary" onClick={createProduct}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CreateProductModal;
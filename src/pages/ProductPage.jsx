import React, { useEffect, useState } from "react";
import ProductDisplay from "../components/ProductDisplay";
import CreateProductModal from "../components/CreateProductModal";
import { getProductApi } from "../Apis/ProductApi";

const ProductPage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const obtainProducts = async () => {
          const resp = await getProductApi(); 
          console.log(resp);
          setProducts(resp);
        };
    
        obtainProducts();
      }, []);

    return (
        <div className="container">
            <main className="row">
            <article className="col">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {products.map((product) => (
                  <ProductDisplay key={product.id} {...product} />
                ))}
              </div>
            </article>
          </main>
          <CreateProductModal/>
        </div>
        )
}

export default ProductPage;
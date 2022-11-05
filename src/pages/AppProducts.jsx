import React, {useState} from "react";
import ProductService from "../services/ProductService";
import AppProductsComponent from "../components/AppProductsComponent";

export default function AppProducts(){

    const [products, setProducts] = useState(ProductService.getAll());

    return ( 
        <div>
            
            {
                products.map(product => ( 
                    <AppProductsComponent key={product.id}
                                            id = {product.id}
                                            name = {product.name}
                                             />
                                            ))
            }
            </div>
    )
}
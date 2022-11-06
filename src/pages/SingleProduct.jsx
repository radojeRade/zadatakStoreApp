import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

import ProductService from "../services/ProductService";
import CustomerService from "../services/CustomerService";
import SingleProductComponent from "../components/SingleProductComponent";


export default function SingleCustomer(){
     const productId = useParams();
     const [product, setNewProduct] = useState(ProductService.get(productId));
     const [customers, setNewCustomers] = useState(CustomerService.getAll());
    
     const [broj , setBroj] = useState(0);

   
    const confirm = (id) => {
        let cusId = Number(broj);
        if(cusId === 0){
            return alert('Potrebno je selektovati korisnika');
        }

        let res = CustomerService.buyProduct(product, cusId);

            let arr = ProductService.decrement(product.id);
            if(arr) { 
            let newProduct = arr.find(el => el.id === product.id);
            
            setNewProduct({ ...newProduct});
            }

    }

    return ( 
    <div>
        { product.count > 0 ?
            <SingleProductComponent name = {product.name}
                                    id = {product.id}
                                    count = {product.count}
                                    customers = {customers}
                                    setBroj = {setBroj}
                                    confirm = {confirm} /> 
            : <Link to = {'/products'}><button>Go to Products</button></Link>
        }                      
                               
    </div>
    )
}
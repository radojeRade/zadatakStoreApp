import React, {useState} from "react";
import ProductService from "../services/ProductService";
import AppProductsComponent from "../components/AppProductsComponent";

export default function AppProducts(){

    const [products, setProducts] = useState(ProductService.getAll());
    const [searchTerm, setSearchTerm] = useState("");
    const [count, setCount] = useState(0);
    
    const search = (term) => {
        setSearchTerm(term);
        setProducts([...ProductService.search(searchTerm)]);
    }

    const increment = (id) => {
        setProducts([...ProductService.increment(id)]);
    }
    const decrement = (id) => {
        setProducts([...ProductService.decrement(id)]);
    }

    return ( 
        <div>
            <> {/*ovo je fragment */}
            <label>Search</label>
            <input type = 'text' value = {searchTerm}  onChange = {(e) => {search(e.target.value)}}/>
            </>
            {
                products.map(product => ( 
                    <AppProductsComponent key={product.id}
                                            id = {product.id}
                                            name = {product.name}
                                            count = {product.count}
                                            increment = {increment}
                                            decrement = {decrement}
                                             />
                                            ))
            }
        </div>
    )
}
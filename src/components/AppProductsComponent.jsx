import React from "react";
import { Link } from "react-router-dom";


export default function AppProductsComponent({id, name, count, increment, decrement}){
    
    return ( 
    <div>
        <ul>
            <li>
            <Link to = {`/products/${id}`}><p>{name} {count}</p></Link>
            <button onClick={() => increment(id)}>+</button>
            <button onClick={() => decrement(id)}>-</button>

            </li>
        </ul>
        
    </div>
    )
}
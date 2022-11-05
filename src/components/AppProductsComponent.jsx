import React from "react";


export default function AppProductsComponent({id, name, count, increment, decrement}){
    
    return ( 
    <div>
        <ul>
            <li>
            <p>{name} {count}</p>
            <button onClick={() => increment(id)}>+</button>
            <button onClick={() => decrement(id)}>-</button>

            </li>
        </ul>
        
    </div>
    )
}
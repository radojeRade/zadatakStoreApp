import React from "react";
import { Link } from "react-router-dom";

export default function SingleProductComponent({id, name, setBroj, count, customers, confirm}){
    return ( 
    <div>
        <div>
            <h2>{name} {count}</h2>
            <select  onChange={(e) => setBroj(e.target.value)}  >
                    <option >Please Choose...</option>  
                    {customers.map((customer, index) => (
                    
                    <option value = {customer.id} key={index}>{customer.name}</option>
                ))}
            </select>
            <button onClick = {() => confirm(id)} >Confirm</button> 
            <Link to = {'/products'}><button>Cancel</button></Link>
        </div>
        
        
    </div>
    )
}
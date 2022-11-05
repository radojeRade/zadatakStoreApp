import React from "react";
import { Link } from "react-router-dom";

export default function AppCustomersComponent({id, name, surname, onDelete, }){
    
    return ( 
    <div>
        <ul>
            <li>
            <Link to = {`/customers/${id}`}><p>{name} <span> {surname}</span> </p></Link>
            <span> <button onClick = {() => onDelete(id)}>Delete</button></span>
           
            </li>
        </ul>
        
    </div>
    )
}
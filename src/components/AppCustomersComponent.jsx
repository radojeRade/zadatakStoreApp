import React from "react";

export default function AppCustomersComponent({id, name, surname, onDelete}){
    
    return ( 
    <div>
        <ul>
            <li>
            <p>{name} <span> {surname}</span> </p>
            <span> <button onClick = {() => onDelete(id)}>Delete</button></span>
           
            </li>
        </ul>
        
    </div>
    )
}
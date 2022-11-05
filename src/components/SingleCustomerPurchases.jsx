import React from "react";

export default function SingleCustomerPurchases({name, surname, purchases}){
    return ( 
    <div>
        <h2>{name} {surname}</h2>
        
        {purchases ?
            
            purchases.map(purchase => ( 
                <ul> 
                <li key = {purchase.id}>
                    {purchase.name}
                </li>
                </ul>
            ))
            
            : <p>Korisnik nema listu proizvoda!</p>
            
        }
        
    </div>
    )
}
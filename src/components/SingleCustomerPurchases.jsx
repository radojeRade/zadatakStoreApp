import React from "react";

export default function SingleCustomerPurchases({name, surname, purchases}){
    return ( 
    <div>
        <h2>{name} {surname}</h2>
        
        {purchases.length > 0 ?
            
            purchases.map((purchase, index) => (  
                <p key = {index}>
                    {purchase.name}
                </p>
            ))
            
            : <p>Korisnik nema listu proizvoda!</p>
            
        }
        
    </div>
    )
}
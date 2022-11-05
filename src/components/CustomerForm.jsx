import React from "react";

export default function AppCustomersComponent({customer, handleName, handleSurname, createCustomer}){
    
    return ( 
        <form onSubmit={createCustomer}>
            <label>Name:
                <input type='text'
                value={customer.name}
                onChange={(e) => {
                handleName(e.target.value);
                }}
                />
            </label>
            <label>
                Surname:
                <input
                type='text'
                value={customer.surname}
                onChange={(e) => {
                handleSurname(e.target.value);
                }}
                />
                
            </label>
      
            <button>Submit</button>
        </form>
    )
}
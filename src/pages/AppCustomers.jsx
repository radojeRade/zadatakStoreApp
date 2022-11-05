import React, {useState} from "react";
import AppCustomersComponent from "../components/AppCustomersComponent";
import CustomerService from "../services/CustomerService";

export default function AppCustomers(){

    const [customers, setCustomers] = useState(CustomerService.getAll());

    const deleteCustomer = (id) => {
        let del = CustomerService.delete(id);
        if(del){
            setCustomers([...del]);
        }
    }

    return ( 
    <div>
        <h1>Customers</h1>
        {
            customers.map(customer => ( 
                <AppCustomersComponent key={customer.id}
                                        id = {customer.id}
                                        name = {customer.name}
                                        surname = {customer.surname}
                                        onDelete = {deleteCustomer} />
                                        ))
        }
    </div>
     )
}
import React, {useState} from "react";
import AppCustomersComponent from "../components/AppCustomersComponent";
import CustomerService from "../services/CustomerService";
import CustomerForm from "../components/CustomerForm";

export default function AppCustomers(){

    const [customers, setCustomers] = useState(CustomerService.getAll());
    const [newCustomer, setNewCustomer] = useState({name: "", surname:""});

    const deleteCustomer = (id) => {
        let del = CustomerService.delete(id);
        if(del){
            setCustomers([...del]);
        }
    }
    const handleName = (name) =>{
        setNewCustomer({...newCustomer, name});
    }
    const handleSurname = (surname) => {
        setNewCustomer({...newCustomer, surname});
    }
    const createCustomer = (e) => {
        e.preventDefault();
        console.log(newCustomer);
        let res = CustomerService.create(newCustomer);
        if(res){
            setCustomers([...customers, res]);
        }
    }
    

    return ( 
    <div>
        <h1>Customers</h1>
        <div>
            <div>
                <CustomerForm customer = {newCustomer}
                              handleName = {handleName}
                              handleSurname = {handleSurname}
                              createCustomer = {createCustomer}/>
            </div>
            <div>
            
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
        </div>
    </div>
     )
}
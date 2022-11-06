import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import SingleCustomerPurchases from "../components/SingleCustomerPurchases";
import CustomerService from "../services/CustomerService";


export default function SingleCustomer(){
    const customerId = useParams();
    const [customer, setNewCustomer] = useState(CustomerService.get(customerId));

    return ( 
    <div>
      <SingleCustomerPurchases name = {customer.name}
                               surname = {customer.surname}
                               purchases = {customer.products}/> 
    </div>
    )
}
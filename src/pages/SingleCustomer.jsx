import React , {useParams} from "react";
import { useState } from "react";
import SingleCustomerPurchases from "../components/SingleCustomerPurchases";
import CustomerService from "../services/CustomerService";


export default function SingleCustomer(){
    const id = useParams;
    const [customer, setNewCustomer] = useState(CustomerService.get(id))
    

    // const getSingleCustomer = (id) => {
    //     let singleCustomer = CustomerService.get(id);
    //     setNewCustomer({...singleCustomer});
    // }

    return ( 
    <div>
      <SingleCustomerPurchases customer = {customer}/> 
    </div>
    )
}
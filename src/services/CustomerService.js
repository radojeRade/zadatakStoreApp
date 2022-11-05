
class CustomerService {
    constructor(){
        this.customers = [
            {
                id:1,
                name: "Marko",
                surname: "Markovic"
            },
            {
                id:2,
                name: "Zarko",
                surname: "Zarkovic"
            },
            {
                id:3,
                name: "Pera",
                surname: "Perovic"
            }
        ]
    }

    getAll = () =>{
        return this.customers;
    }
    get(id) {
       
        let user = this.customers.find((customer) => customer.id === Number(id.customerId))
       
        return user;
      }
    delete(id) {
        let newCustomer = this.customers.filter(x => x.id !== id);
         this.customers = [...newCustomer];
         //arr.splice(arr, 1);
         
         
         return this.customers;
    }
    create(customer) {
        let id = this.customers.length +1;
        let addCustomer = {...customer, id};
        this.customers = [...this.customers, addCustomer];

        return addCustomer;
    }
}
export default new CustomerService();
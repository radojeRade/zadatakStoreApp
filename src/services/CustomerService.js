
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
        return this.customers.find((customer) => customer.id === id);
      }
    delete(id) {
        let newCustomer = this.customers.filter(x => x.id !== id);
         this.customers = [...newCustomer];
         //arr.splice(arr, 1);
         
         
         return this.customers;
    }
}
export default new CustomerService();
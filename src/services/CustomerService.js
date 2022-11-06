
class CustomerService {
    constructor(){
        this.customers = [
            {
                id:1,
                name: "Marko",
                surname: "Markovic",
                products: [{
                    id:1,
                    name: "Bic",
                    count: 3,
                    
                },]
            },
            {
                id:2,
                name: "Zarko",
                surname: "Zarkovic",
                products: []
            },
            {
                id:3,
                name: "Pera",
                surname: "Perovic",
                products: []
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
    buyProduct(product, customerId){
      console.log(customerId);
        let arr =this.customers.map(el => {
            if(el.id === customerId){
                el.products.push(product);
            }
            return el;
        })
        this.customers = [...arr];
        return this.customers;
    }
}
export default new CustomerService();
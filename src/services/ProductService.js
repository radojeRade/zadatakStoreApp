class ProductService {
    constructor(){
        this.products = [
            {
                id:1,
                name: "Bic",
                
            },
            {
                id:2,
                name: "Lisice",
                
            },
            {
                id:3,
                name: "Kavez",
            
            }
        ]
    }

    getAll = () =>{
        return this.products;
    }
    get(id) {
        return this.products.find((product) => product.id === id);
      }
    delete() {
        
    }
    create() {
        
    }
    search(term){

    }
}
export default new ProductService();
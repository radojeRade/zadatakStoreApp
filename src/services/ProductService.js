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
            
            },
            {
                id:4,
                name: "Lizalica",
            
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
        let arr = this.products.filter((product) => {
            return (product.name.toLowerCase().includes(term.toLowerCase())

        )})
        return arr;
    }
}
export default new ProductService();
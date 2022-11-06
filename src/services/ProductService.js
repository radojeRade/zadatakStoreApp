class ProductService {
    constructor(){
        this.products = [
            {
                id:1,
                name: "Bic",
                count: 3,
                
            },
            {
                id:2,
                name: "Lisice",
                count: 0,
                
            },
            {
                id:3,
                name: "Kavez",
                count: 5,
            },
            {
                id:4,
                name: "Lizalica",
                count: 6,
            }
        ]
    }

    getAll = () =>{
        return this.products;
    }
    get(id) {
       
        let singleProduct = this.products.find((product) => product.id === Number(id.productId))
       
        return singleProduct;
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
    increment(id){
        let arr = this.products.map(el => {
            if(el.id === id){
                el.count++;
            }
            return el;
        })
        this.products = [...arr];
        return this.products;
         
    }
    decrement(id){
        let arr = this.products.map(el => {
            if(el.id === id && el.count > 0){
                el.count--;
            }
            return el;
        })
        this.products = [...arr];
        return this.products;
    }
}
export default new ProductService();
class ProductService {
    constructor(){
        this.products = [
            {
                id:1,
                name: "Bic",
                count: 0,
                
            },
            {
                id:2,
                name: "Lisice",
                count: 0,
                
            },
            {
                id:3,
                name: "Kavez",
                count: 0,
            },
            {
                id:4,
                name: "Lizalica",
                count: 0,
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
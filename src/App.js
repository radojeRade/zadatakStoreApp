
import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function App() {
  return (
    
    <div className="App">
     <nav>  
          <Link to="/customers">Customers</Link><br></br>
      
           <Link to="/products">Products</Link>
     </nav>
     
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import TrProducts from "../Components/TrProducts";
import AddProduct from "../Components/AddProduct";
import {Connect} from '../Api/config';


const Products = () => {
  const [products, setproducts] = useState([]);
 

  const loadproducts = async () => {
  
    const axios = await Connect();
    axios.get('products').then((response) => {
       setproducts(response.data.data);
      
    }).catch(function (error) {});
    
};

useEffect(() => {
  loadproducts();
},[]);


  

  const search = async (searchtext) => {
  
      const axios = await Connect();
      axios.get('products?searchQuery='+searchtext).then((response) => {
         setproducts(response.data.data);
        
      }).catch(function (error) {});
  }

  return (
    <> 
     <div className="PageHeader">
      <div className="flexed">
      <h3>Products</h3>  
        <input class="form-control me-2 search-input" type="search" placeholder="Search" aria-label="Search" onChange={(e)=> search(e.target.value)}></input>
      </div>
     
     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Add Product
     </button>
     </div>
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Count</th>
      <th scope="col">Creation Date</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
   
       {products.map((product) => {
        
     
        return <TrProducts key={product.id} loadproducts={loadproducts} id={product.id} title={product.title} description={product.description} count={product.Count} creationdate={product.created_at} /> 
       })}
     
  </tbody>
</table>

    <AddProduct loadproducts={loadproducts}  />
    </>
    
     
  );
}

export default Products;
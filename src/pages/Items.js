import React, { useState, useEffect } from "react";
import TrItems from "../Components/TrItems";
import AddItem from "../Components/AddItem";
import { useLocation } from 'react-router-dom';
import {Connect} from '../Api/config';

const Items = () => {
 
  const location = useLocation();
  const productid = location.state.pid;

  const [items, setitems] = useState([]);
 

  const loaditems = async () => {
  
    const axios = await Connect();
    axios.get('items?productid='+ productid).then((response) => {
       setitems(response.data.data);
      
    }).catch(function (error) {});
    
};

useEffect(() => {
  loaditems();
},[]);


  

  const search = async (searchtext) => {
  
      const axios = await Connect();
      axios.get('items?searchQuery='+searchtext).then((response) => {
         setitems(response.data.data);
        
      }).catch(function (error) {});
  }

  return (
    <> 
    <div className="PageHeader">
     <div className="flexed">
     <h3>Items</h3>  
       <input class="form-control me-2 search-input" type="search" placeholder="Search" aria-label="Search" onChange={(e) => { search(e.target.value) }}></input>
     </div>
    
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#AdditemModel">
     Add Item
    </button>
    </div>
   <table class="table table-striped">
 <thead>
   <tr>
     <th scope="col">ID</th>
     <th scope="col">Serial Number</th>
     <th scope="col">Sold</th>
     <th scope="col">Creation Date</th>
     <th scope="col"></th>
     <th scope="col"></th>
   </tr>
 </thead>
 <tbody>

      {items.map((item) => {
        
        return  <TrItems key={item.id} id={item.id} sn={item.serial_number} sold={item.sold} creationdate={item.created_at} loaditems={loaditems}/>
       })}
    
 </tbody>
</table>

  <AddItem productid={productid} loaditems={loaditems} />
   </>
  );
}

export default Items;
import React from "react";
import {Connect} from '../Api/config';
import { Link, useNavigate } from 'react-router-dom';

function TrProducts({id, title, description, count, creationdate, loadproducts}) {
  const navigate = useNavigate();
  const remove = async () => {
      
    const axios = await Connect();
    axios.delete('products/'+id).then((response) => {
      loadproducts();
    }).catch(function (error) {});
  }
  
  const toItems = () => {
    navigate("items", {state: { pid: id}});
  }
  return (
    
    <tr>
    <th scope="row">{id}</th>
    <td >{title}</td>
    <td>{description}</td>
    <td>{count}</td>
    <td>{creationdate}</td>
    <td><button type="button" class="btn btn-primary" onClick={toItems}>
      View Items
     </button></td>
    <td><button type="button" class="btn btn-primary" >
      Edit
     </button></td>
    <td> <button type="button" class="btn btn-danger" onClick={remove}>
      Remove
     </button></td>
  </tr>
 
  );
}

export default TrProducts;
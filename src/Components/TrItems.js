import React from "react";
import {Connect} from '../Api/config';


function TrItems({id, sn, sold, creationdate, loaditems}) {
  const remove = async () => {
      
    const axios = await Connect();
    axios.delete('items/'+id).then((response) => {
      loaditems();
    }).catch(function (error) {});
  }

  const updatesold = async (value) => {
      
    const axios = await Connect();
    axios.put('items/'+id,{
      sold: value
    }).then((response) => {
     
    }).catch(function (error) {});
  }

  return (
    <tr>
    <th scope="row">{id}</th>
    <td >{sn}</td>
   
    <td>
      <input type="checkbox" defaultChecked={sold? true : false} onChange={(e) => updatesold(e.target.checked)} />
    </td>
    <td>{creationdate}</td>
    <td><button type="button" class="btn btn-primary" >
      Edit
     </button></td>
    <td> <button type="button" class="btn btn-danger" onClick={remove}>
      Remove
     </button></td>
  </tr>
  );
}

export default TrItems;
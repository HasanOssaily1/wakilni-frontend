import React , {useState} from "react";
import {Connect} from '../Api/config';


const AddItem = ({productid, loaditems}) => {
  const [sn, setsn] = useState('');
  const [Errors, setErrors] = useState([]);

  const additems = async () => {
    const axios = await Connect();

   
    axios.post('items',{
      product_id: productid,
      serial_number: sn,
      sold: 0
    }).then(async (response) => {
    
    loaditems();
     
    })
    .catch(function (error) {
      
       setErrors([error.response.data.message]);
       
    });
     
  
  }

  return (
  
    <div class="modal fade" id="AdditemModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Item</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
       
  <div class="mb-3">
    <label for="SerialNumber" class="form-label">Serial Number</label>
    <input type="text" class="form-control" id="SerialNumber" onChange={(e) => setsn(e.target.value)} />
   </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" onClick={additems}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
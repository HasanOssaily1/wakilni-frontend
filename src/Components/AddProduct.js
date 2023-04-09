import React , {useState} from "react";
import {Connect} from '../Api/config';

function AddProduct ({loadproducts})  {
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [Errors, setErrors] = useState([]);
  

  const addproduct = async () => {
    const axios = await Connect();

    const formData = new FormData(); // Create a new FormData object
    formData.append('picture', file); //
    formData.append('title', Title); 
    formData.append('description', Description); 

    axios.post('products',formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
  }).then(async (response) => {
    
    loadproducts();
     
    })
    .catch(function (error) {
      
       setErrors([error.response.data.message]);
       
    });
     
  
  }

  return (
    <>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"  >
      <div class="modal-dialog">
      
        <div class="modal-content">
          
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
     
  <div class="mb-3">
    <label for="title" class="form-label">Title</label>
    <input type="text" class="form-control" required id="title" onChange={(e) => setTitle(e.target.value)} />
   </div>
  <div class="mb-3">
    <label for="description" class="form-label">Description</label>
    <input type="text" class="form-control" required id="description" onChange={(e) => setDescription(e.target.value)} />
  </div>
  <div class="mb-3">
    <label for="Picture" class="form-label">Picture</label>
    <input type="file" required class="form-control" id="Picture"  accept=".png,.jpg,.jpeg" onChange={(e) =>  setFile(e.target.files[0]) }/>
  </div>
      {Errors.map((error) => {
        
      })}
     

          </div>
          <div class="modal-footer">
            <button id="closebtn" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary" onClick={addproduct}>Save changes</button>
          </div>
       
        </div>
      </div>
    </div>

 
  </>
  );
}

export default AddProduct;
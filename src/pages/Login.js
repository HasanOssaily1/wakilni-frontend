import React, { useState } from "react";
import {
    Link
  } from "react-router-dom";
  import { useNavigate } from "react-router-dom";
  import {Connect} from '../Api/config';
  import { useLocalStorage } from "../providers/useLocalStorage";

function Login() {
  const [Email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [errors, setErrors] = useState();
  const [token, settoken] = useLocalStorage("wakilnijwttoken", null);

  const navigate = useNavigate();

  const login = async () => {
    const axios = await Connect();
    axios.post('auth/login', {
      email: Email,
      password: password
    })
    .then(async (response) => {
      
        await settoken(response.data.token);

         navigate('/dashboard');
    })
    .catch(function (error) {
       setErrors(error.response.data.message);
    });
     
   
  }
  return (
    <div className="Centerd">
     
     <div className="Form col-lg-5 col-md-8 col-sm-12 col-xs-12">
        <h2 className="FormTitle">LogIn</h2>
        
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address*</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { setEmail(e.target.value)}}/>
   </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password*</label>
    <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => { setpassword(e.target.value) }}/>
  </div>
 
  <button class="btn btn-primary" onClick={login} >Submit</button>
   
   <Link to="/register">Register here</Link>
 
         {errors? "Wrong credentials " : ""}
  
 
     </div>
     
    
   </div>
  );
}

export default Login;
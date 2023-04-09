import React , { useState } from "react";
import {
  Link,
  useNavigate
} from "react-router-dom";
import {Connect} from '../Api/config';
import { useLocalStorage } from "../providers/useLocalStorage";
function Register() {

  const [Email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [errors, setErrors] = useState();
  const [token, settoken] = useLocalStorage("wakilnijwttoken", null);

  const navigate = useNavigate();

  const register = async () => {
    const axios = await Connect();
    axios.post('auth/register', {
      email: Email,
      password: password,
      password_confirmation: confirmpassword
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
       <h2 className="FormTitle">Register</h2>
       
 <div class="mb-3">
   <label for="exampleInputEmail1" class="form-label">Email address*</label>
   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { setEmail(e.target.value)}}/>
  </div>
 <div class="mb-3">
   <label for="exampleInputPassword1" class="form-label">Password*</label>
   <input type="password" class="form-control" id="exampleInputPassword1"  onChange={(e) => { setpassword(e.target.value) }}/>
 </div>
 <div class="mb-3">
   <label for="exampleInputPassword2" class="form-label">Confirm Password*</label>
   <input type="password" class="form-control" id="exampleInputPassword2" onChange={(e) => { setconfirmpassword(e.target.value) }}/>
 </div>
 <button type="submit" class="btn btn-primary" onClick={register}>Submit</button>
  
<Link to="/">Login here</Link>


{errors? "All Fields are required" : ""}
    </div>
    
   
  
  </div>
  );
}

export default Register;
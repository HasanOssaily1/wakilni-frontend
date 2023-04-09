
import axios from 'axios';


export const Connect = async () => {
    const token = await window.localStorage.getItem("wakilnijwttoken");
    axios.defaults.baseURL = "http://127.0.0.1:8000/api";
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
   
    axios.interceptors.response.use((response) => {
      return response
   }, async function (error) {
      const originalRequest = error.config;
     
    
      if (error.response.status === 401 && !originalRequest._retry) {
   
          originalRequest._retry = true;
          
          try {
            window.localStorage.setItem("wakilnijwttoken", null);
            window.location.replace("/");
          } catch (err) {}
          
         
      }
      return Promise.reject(error);
   });

   return axios;
}
  



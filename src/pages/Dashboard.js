import React from "react";
import {
  Outlet
} from "react-router-dom";
import { useLocalStorage } from "../providers/useLocalStorage";

const Dashboard = () => {
  const [token, settoken] = useLocalStorage("wakilnijwttoken", null);
  

  const logout = () => {
    try {
       settoken(null);
       window.location.replace("/");
    } catch (err) {}
   
  }
  return (
    <div className="Container">
      <div className="Header">
         <h3>Dashboard</h3>
         <button class="btn btn-danger" onClick={logout} >Logout</button>
      </div>
      <div className="DashboardBody">
        <Outlet />
      </div>
     
    
   
   </div>
  );
}

export default Dashboard;
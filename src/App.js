// import '/pages/Login';
// import '/pages/Register';
import './App.css';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { ProtectedRoute } from './providers/ProtectedRoute';
import Products from "./pages/Products";
import Items from "./pages/Items";

function App() {
  return (
    <Router>
    <div className="container">
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Routes >
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={  <ProtectedRoute>
          <Dashboard />
          </ProtectedRoute>} >
           <Route path="" element={ <Products /> } />
           <Route path="items" element={ <Items/>} />
          </Route>
        
       
      </Routes >
    </div>
     </Router>
  );
}

export default App;

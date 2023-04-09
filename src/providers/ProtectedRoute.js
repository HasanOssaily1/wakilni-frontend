import { Navigate } from "react-router-dom";
import { useLocalStorage } from "../providers/useLocalStorage";

export const ProtectedRoute = ({ children }) => {
  const [token] = useLocalStorage("wakilnijwttoken", null);
  if (!token) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};
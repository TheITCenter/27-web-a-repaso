import { useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const AuthProvider = ({children}) => {
  const navigate = useNavigate(AuthContext);

  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const [isAuthenticated, setIsAuthenticated] = useState(token ? true : false);

  const login = async(formData) => {

    try {
      const { data } = await axios.post('http://localhost:8000/auth/login', formData);
      localStorage.setItem('token', data.token);
      
      if(data.token){
        setToken(data.token);
        navigate('/');
        setIsAuthenticated(true);  
      }

    } catch (error) {
      console.log(error)
    }
    
  }
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setIsAuthenticated(false);
    navigate('/login');
  }


  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

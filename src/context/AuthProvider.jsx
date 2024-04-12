import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({children}) => {

  const [isAuthenticated, setIsAuthenticated] = useState(true);

  

  const login = () => {
    setIsAuthenticated(true);
  }
  const logout = () => {
    setIsAuthenticated(false);
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

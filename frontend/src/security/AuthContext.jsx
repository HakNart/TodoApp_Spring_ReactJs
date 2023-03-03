import { createContext, useContext, useState } from "react";

// Create a Context component
export const AuthContext = createContext()

// Provide convienient export function to grap all the contexts provided in the AuthContext
export const useAuth = () => {
  return useContext(AuthContext)
}

export default function AuthProvide({children}) {

  // Create some state in the context
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);

  // Soft function to authenticate, switch later
  function login(username, password) {
    if(username === 'bob' && password === "bob123") {
      setAuthenticated(true);
      setUsername(username)
      return true;
    } else {
      setAuthenticated(false);
      setUsername(null);
      return false;
    }
  }

  // Logout function
  function logout() {
    setAuthenticated(false);
    setToken(null);
    setUsername(null)
  }

  // Wrap-around component to provide context to all children
  return (
    <AuthContext.Provider value = {{isAuthenticated, login, logout, username, token}}>
      {children}
    </AuthContext.Provider>
  )
}
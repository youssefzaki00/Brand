import React, { createContext, useEffect, useState } from 'react'
import { auth } from './firebase'
import Loading from'./Components/Loading.js'
export const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true)
  useEffect(() => {
  
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, [])
  if (loading) {
    return (
      <Loading/>
    )
  }
  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}
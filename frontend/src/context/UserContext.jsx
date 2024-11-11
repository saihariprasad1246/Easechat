import React from 'react'
import { createContext ,useContext,useState,useEffect } from 'react'

const UserContext=createContext({});

export default function UserContextProvider({ children}) {
  const [user,setUser] = useState({});
  const [notifications,setNotifications]=useState([]);
  const [loading,setLoading] = useState(true);
  
  return (
    
    <UserContext.Provider value={{user,setUser,notifications,setNotifications}}>
      {children}
    </UserContext.Provider>
    
    
    
  )
}

export const CreateContext = ()=>{
  return useContext(UserContext)
}



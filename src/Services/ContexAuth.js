import React, { createContext, useContext, useEffect, useState }from 'react'
import {onAuthStateChanged} from "firebase/auth";
import {getUsetAct} from "../Services/FirebaseAuth"
import { auth } from "../Services/Firebase";
export const context = createContext()
export const useAuth = ()=>{
  const authContext = useContext(context)
  return authContext
}
export function ContexAuth({children}) {
  const [User, setUser] = useState(null)
  const [login, setlogin] = useState(false)
    const user = {
        login:true,
    };
    useEffect(() => {
      onAuthStateChanged(auth, (userActual =>{
        if(userActual == null)
          setlogin(false)
          else{
            setUser(userActual)
            setlogin(true)
          }
          
        console.log(userActual)
        
      }))
    }, [])
    
  return (
    <context.Provider value={{login, User,}} >{children}</context.Provider>
  )
}
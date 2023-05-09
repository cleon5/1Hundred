import React, { createContext, useContext, useEffect, useState }from 'react'
import {onAuthStateChanged} from "firebase/auth";
import {getUsetAct} from "../Services/FirebaseAuth"
import { auth } from "../Services/Firebase";
import { getUser, PeliculasVistasUpdate } from "../Services/FirebaseGettters";

export const context = createContext()
export const useAuth = ()=>{
  const authContext = useContext(context)
  return authContext
}
export function ContexAuth({children}) {
  const [User, setUser] = useState(auth.currentUser)
  const [login, setlogin] = useState(false)
  const [Movies, setMovies] = useState([])

  const getMovies=async ()=>{
    let movies = await getUser()
    setMovies(Object.values(movies.PeliculasVistas))
    console.log(Object.values(movies.PeliculasVistas))
  }
  const stateUser = () =>{
    onAuthStateChanged(auth, (userActual =>{
      if(userActual == null)
        setlogin(false)
        else{
          setUser(userActual)
          setlogin(true)
        }
        
      console.log(userActual)
      
    }))
  }
    useEffect(() => {
      stateUser()
      getMovies()
    }, [])
    
  return (
    <context.Provider value={{login, User, Movies}} >{children}</context.Provider>
  )
}
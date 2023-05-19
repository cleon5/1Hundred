import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { getUsetAct } from "../Services/FirebaseAuth";
import { auth } from "../Services/Firebase";
import { getUser, PeliculasVistasUpdate, getUserId } from "../Services/FirebaseGettters";

export const context = createContext();
export const useAuth = () => {
  const authContext = useContext(context);
  return authContext;
};

export function ContexAuth({ children }) {
  const [User, setUser] = useState(auth.currentUser);
  const [login, setlogin] = useState(false);
  const [Movies, setMovies] = useState();
  const [Series, setSeries] = useState();

  const getMovies = async () => {
    let movies = await getUser();
    movies && setMovies(Object.values(movies.PeliculasVistas));
    // if(movies == null)
    //getMovies()
    console.log(Object.values(movies.PeliculasVistas));
  };
  const stateUser = async () => {
    let user;
    await onAuthStateChanged(auth, async (userActual) => {
      if (userActual == null) setlogin(false);
      else {
        setUser(userActual);
        setlogin(true);
        let u = await getUserId(userActual)
        setMovies(Object.values(u.PeliculasVistas));
        setSeries(Object.values(u.SeriesVistas));
        console.log(Movies);
      }

      console.log(userActual);
    });
  };
  useEffect(() => {
    stateUser();
    // getMovies()
    //  component.forceUpdate(callback)
  }, []);

  return (
    <context.Provider value={{ login, User, Movies, Series }}>
      {children}
    </context.Provider>
  );
}

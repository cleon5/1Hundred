import { db } from "./Firebase";
import {
  doc,
  setDoc,
  getDoc,
  query,
  where,
  orderBy,
  limit,
  collection, getDocs
} from "firebase/firestore";

export const getDocument = async (Collection, document) => {
  const docRef = doc(db, Collection, document);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
};

export const getMovie = async (idPelicula) => {
  const docRef = doc(db, "Peliculas", idPelicula);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
};
 const getCreditos = async (idPelicula) => {
  const docRef = doc(db, "Creditos", idPelicula);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
};
export const getMovieWhere = async () => {
  const movieRef = collection(db, "Peliculas");
  const q = query(
    movieRef,
    where("popularity", ">", "40"),
    orderBy("popularity"),
    limit(10)
  );
  const querySnapshot = await getDocs(q);
  let returnPelis = []
  querySnapshot.forEach((doc) => {
    returnPelis.push(doc.data())

  });

  return returnPelis;
};


export const PeliculasVistasUpdate=()=>{
    let dataUser = getDocument("Users", "")
}
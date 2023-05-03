import { db } from "./Firebase";
import {
  doc,
  setDoc,
  getDoc,
  query,
  where,
  orderBy,
  limit,
  collection, getDocs, updateDoc,
} from "firebase/firestore";
import { auth } from "../Services/Firebase";

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
export const getUser= async()=>{
  const user = auth.currentUser;
  console.log(user)
    //let docSnap = await getDoc(doc(this.firestore, 'Users', this.userData.uid));
    //this.setUserData(docSnap.data());
    //return docSnap.data();
  
}

export const PeliculasVistasUpdate= async(id)=>{
  const washingtonRef = doc(db, "Users", );

  // Set the "capital" field of the city 'DC'
  await updateDoc(washingtonRef, {
    capital: true
  });

    let dataUser = getDocument("Users", "")
}
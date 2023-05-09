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


let userLocal;
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
export const getUserId = async(id) =>{
  let docSnap = await getDoc(doc(db, 'Users',id));
  return docSnap.data()
}
export const getUser= async()=>{
  const user = await auth.currentUser;
  console.log(user)
  let docSnap = await getDoc(doc(db, 'Users', user.uid));
  return docSnap.data()
  
}
const AgregarPeliculaVistaUser = (Peliculas, userid) => {
  console.log(Peliculas, userid);
  updateDoc(doc(db, 'Users', userid), {
    PeliculasVistas: Peliculas,
  });
}
export const PeliculasVistasUpdate= async(id)=>{
    let user = await getUser();
    let PeliculasVistas = user.PeliculasVistas;
    console.log(PeliculasVistas)
    if (PeliculasVistas == undefined) {
      PeliculasVistas = [id];
    } else if(!PeliculasVistas.includes(id)) {
      PeliculasVistas.push(id);
    }
    else{
      PeliculasVistas.splice(PeliculasVistas.indexOf(id), 1)
    }

    console.log(PeliculasVistas);
    AgregarPeliculaVistaUser(PeliculasVistas, user.user.uid);
    getUser()
}
import { db } from "./Firebase";
import {
  doc,
  setDoc,
  getDoc,
  query,
  where,
  orderBy,
  limit,
  collection,
  getDocs,
  updateDoc,addDoc
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

export const getWhere = async (tipo) => {
  const movieRef = collection(db, tipo);
  const q = query(
    movieRef,
    where("popularity", ">", "40"),
    orderBy("popularity"),
    limit(10)
  );
  const querySnapshot = await getDocs(q);
  let returnPelis = [];
  querySnapshot.forEach((doc) => {
    returnPelis.push(doc.data());
  });

  return returnPelis;
};
export const getUserId = async (user) => {
  let docSnap = await getDoc(doc(db, "Users", user.uid));
  return docSnap.data();
};
export const getUser = async () => {
  const user = await auth.currentUser;
  let docSnap = user && (await getDoc(doc(db, "Users", user.uid)));
  return user && docSnap.data();
};
const AgregarPeliculaVistaUser = (Peliculas, userid) => {
  updateDoc(doc(db, "Users", userid), {
    PeliculasVistas: Peliculas,
  });
};
const AgregarSeriesVistaUser = (Series, userid) => {
  updateDoc(doc(db, "Users", userid), {
    SeriesVistas: Series,
  });
};
export const SeriesVistasUpdate = async(id)=>{
  let user = await getUser();
  let SeriesVistas = user.SeriesVistas;
  console.log(SeriesVistas);
  if (SeriesVistas == undefined) {
    SeriesVistas = [id];
  } else if (!SeriesVistas.includes(id)) {
    SeriesVistas.push(id);
  } else {
    SeriesVistas.splice(SeriesVistas.indexOf(id), 1);
  }

  console.log(SeriesVistas);
  AgregarSeriesVistaUser(SeriesVistas, user.user.uid);
}

export const PeliculasVistasUpdate = async (id) => {
  let user = await getUser();
  let PeliculasVistas = user.PeliculasVistas;
  console.log(PeliculasVistas);
  if (PeliculasVistas == undefined) {
    PeliculasVistas = [id];
  } else if (!PeliculasVistas.includes(id)) {
    PeliculasVistas.push(id);
  } else {
    PeliculasVistas.splice(PeliculasVistas.indexOf(id), 1);
  }
  console.log(PeliculasVistas);
  AgregarPeliculaVistaUser(PeliculasVistas, user.user.uid);
};

export const PostComentario = async(comentario, id) =>{
  let user = await getUser();

}

export const AgregarComentarioPelicula = async(Comentario, idMovie) => {
  const fecha = new Date();
  let userId = await getUser();
  userId = userId.user
  await setDoc(doc(db, `ComentariosPeliculas/${idMovie}/Comentarios`, userId.displayName ), {
    Comentario: Comentario,
    Img:userId.photoURL,
    Nombre:userId.displayName,
    Fecha:fecha.toLocaleDateString()
  });
};

export const AgregarComentarioSerie = async(Comentario, idSerie) => {
  const fecha = new Date();
  let userId = await getUser();
  userId = userId.user
  console.log(userId)
  await setDoc(doc(db, `ComentariosSeries/${idSerie}/Comentarios`, userId.displayName ), {
    Comentario: Comentario,
    Img:userId.photoURL,
    Nombre:userId.displayName,
    Fecha:fecha.toLocaleDateString()
  });
};
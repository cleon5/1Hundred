import { db } from "./Firebase"
import { doc, setDoc, getDoc } from "firebase/firestore";

export const getDocument = async (Collection, document) => {
    const docRef = doc(db, Collection,document);
    const docSnap = await getDoc(docRef);
    
    return docSnap.data();
}

export const getMovie = async (idPelicula) => {
    const docRef = doc(db, "Peliculas",idPelicula);
    const docSnap = await getDoc(docRef);
    
    return docSnap.data();
}
export const getCreditos = async (idPelicula) => {
    const docRef = doc(db, "Creditos",idPelicula);
    const docSnap = await getDoc(docRef);
    
    return docSnap.data();
}
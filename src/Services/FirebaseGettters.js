import { db } from "./Firebase"
import { doc, setDoc, getDoc } from "firebase/firestore";

export const getDocument = async (Collection, document) => {
    const docRef = doc(db, Collection,document);
    const docSnap = await getDoc(docRef);
    
    return docSnap.data();
}

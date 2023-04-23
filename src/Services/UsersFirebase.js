import { db } from "./Firebase"
import { doc, setDoc } from "firebase/firestore";

export const saveUser = async(user) => {
    await setDoc(doc(db, "Users", user.uid), {
        user
      }, { merge: true });    
} 
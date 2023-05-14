import { createUserWithEmailAndPassword, signInWithEmailAndPassword, 
  GoogleAuthProvider,signInWithPopup, signOut ,onAuthStateChanged
} from "firebase/auth";
import { auth } from "../Services/Firebase";
import { saveUser } from "./UsersFirebase";

const providerGoogle = new GoogleAuthProvider();
let userData;
const setUserData = (user) =>{
  userData = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    emailVerified: user.emailVerified
  }
}
//const user = auth.currentUser;
export const getUsetAct = () => {
  onAuthStateChanged(auth, (user) => {
    console.log(user)
    if (user) {
      const uid = user.uid;
      console.log(user)
      return user
      // ...
    } else {
      // User is signed out
      // ...
      console.log(user)
      return null
    }
  });
}

export const Registro = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const LoginEmail = async (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
        console.log(error);
    });
};
export const LoginGoogle = () => {
  signInWithPopup(auth, providerGoogle)
  .then((result) => {
    setUserData(result.user)
    saveUser(userData)
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    console.log(error)
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
};

export const LogOut = () => {
  signOut(auth).then(() => {
    console.log("out")
  }).catch((error) => {
    console.log(error)
  });
};

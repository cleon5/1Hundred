import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAw-6dGjJz-QD0Efx1Opg12PBtqukhaq6M",
  authDomain: "hundred-b9c4c.firebaseapp.com",
  projectId: "hundred-b9c4c",
  storageBucket: "hundred-b9c4c.appspot.com",
  messagingSenderId: "300865345665",
  appId: "1:300865345665:web:a7a4b35873e0f297fa5580",
  measurementId: "G-EH29G2G26R"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;

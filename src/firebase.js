import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
export { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhMDB0EqjAzYTxZIkPblpgxJusBB-_elg",
  authDomain: "travel-diary-d91c9.firebaseapp.com",
  projectId: "travel-diary-d91c9",
  storageBucket: "travel-diary-d91c9.firebasestorage.app",
  messagingSenderId: "1093618451189",
  appId: "1:1093618451189:web:aaaa36d2a28da493d33bbc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const createUserDocument = async (uid, name, email) => {
  const userDocRef = doc(db, 'users', uid);
  await setDoc(userDocRef, { name, email });
};

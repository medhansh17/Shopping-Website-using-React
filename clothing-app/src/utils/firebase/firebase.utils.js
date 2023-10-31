import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdOpJ1dB7pXyrMSyoqMwPXrnPCrsCc7IQ",
  authDomain: "clothing-db-d779c.firebaseapp.com",
  projectId: "clothing-db-d779c",
  storageBucket: "clothing-db-d779c.appspot.com",
  messagingSenderId: "631622769072",
  appId: "1:631622769072:web:ae3a5e9dba614c5e375e75",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  // if user data exists -> return userDocs
  // if user data doesnt exist ->  create / set the document with the data from userAuth in my collection

  if (!userSnapshot.exists()) { //user exists or not
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {//setting doc if user not found
        displayName,
        email,
        createdAt,
      });
    } catch (error) { //error catching
      console.log("error creating user", error.message);
    }
  }

  return userDocRef;
};

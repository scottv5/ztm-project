import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc as getDocData,
  setDoc as setDocData,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCX-bMiQrGVwe3G7uxcDw0-bGOHjAtQLEw",
  authDomain: "crwn-clothing-db-ea2b1.firebaseapp.com",
  projectId: "crwn-clothing-db-ea2b1",
  storageBucket: "crwn-clothing-db-ea2b1.appspot.com",
  messagingSenderId: "677222022406",
  appId: "1:677222022406:web:6d1c8ea694f88a12f5f287",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
console.log("///AUTH///", auth);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async userAuth => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDocData(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await setDocData(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (e) {
      console.log("error creating user", e.message);
    }
  }
  //return userSnapshot.data();
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  await signOut(auth);
};

export const onAuthStateChangedListener = callback =>
  onAuthStateChanged(auth, callback);

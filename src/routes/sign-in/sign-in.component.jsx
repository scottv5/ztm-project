import { Fragment as F } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup();
    console.log(res);
    const userDocRef = await createUserDocumentFromAuth(res.user);
  };
  return (
    <F>
      <h2>sign in component</h2>
      <button onClick={logGoogleUser}>Sign in with Google popup</button>
    </F>
  );
};

export default SignIn;

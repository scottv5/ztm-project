import { Fragment as F, useEffect } from "react";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.component";

// useEffect(async () => {
//   const res = await getRedirectResult(auth);
//   console.log(res);
// }, []);

const SignIn = () => {
  useEffect(() => {
    const getUserCred = async () => {
      const res = await getRedirectResult(auth);
      console.log(res);
      if (res) {
        const userDocRef = await createUserDocumentFromAuth(res.user);
      }
    };
    getUserCred();
  }, []);

  const logGoogleUser = async () => {
    const res = await signInWithGoogleRedirect();
    const userDocRef = await createUserDocumentFromAuth(res.user);
  };
  return (
    <F>
      <h2>sign in component</h2>
      <Button buttonType="google" onClick={logGoogleUser}>
        Sign in with Google redirect
      </Button>

      <SignUpForm />
    </F>
  );
};

export default SignIn;

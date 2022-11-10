import { useEffect, useContext } from "react";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";
import Button from "../../components/button/button.component";
import "./sign-in.styles.scss";
import { UserContext } from "../../contexts/user.context";

// useEffect(async () => {
//   const res = await getRedirectResult(auth);
//   console.log(res);
// }, []);

const SignIn = () => {
  useEffect(() => {
    const getUserCred = async () => {
      const res = await getRedirectResult(auth);
      if (res) {
        const userDocRef = await createUserDocumentFromAuth(res.user);
      }
    };
    getUserCred();
  }, []);

  const logGoogleUser = async () => {
    await signInWithGoogleRedirect();
  };
  return (
    <div className="sign-in-container-2">
      <div className="sign-in-form-container">
        <SignInForm />
        <Button buttonType="google" onClick={logGoogleUser}>
          Sign in with Google redirect
        </Button>
      </div>

      <div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignIn;

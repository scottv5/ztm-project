import { useEffect } from "react";
import {
  auth,
  //signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";
import styled from "styled-components";

const SignIn = () => {
  useEffect(() => {
    const getUserCred = async () => {
      const res = await getRedirectResult(auth);
      if (res) {
        //const userDocRef =
        await createUserDocumentFromAuth(res.user);
      }
    };
    getUserCred();
  }, []);

  const logGoogleUser = async () => {
    await signInWithGoogleRedirect();
  };
  return (
    <SignInContainer>
      <FormContainer>
        <SignInForm />
        <Button buttonType={BUTTON_TYPE_CLASSES.google} onClick={logGoogleUser}>
          Sign in with Google redirect
        </Button>
      </FormContainer>

      <div>
        <SignUpForm />
      </div>
    </SignInContainer>
  );
};

//styles
const SignInContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SignIn;

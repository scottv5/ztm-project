import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../../components/form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import styled from "styled-components";

const SignUpForm = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const onChangeHandler = e => {
    setFormFields(() => ({
      ...formFields,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = async e => {
    e.preventDefault();
    const { email, password, confirmPassword } = formFields;

    if (password !== confirmPassword) return;
    const user = await createAuthUserWithEmailAndPassword(email, password);
    setFormFields(() => ({ ...defaultFormFields }));
    if (user) {
      user.user.displayName = displayName;
      await createUserDocumentFromAuth(user.user);
    }
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form action="" onSubmit={e => onSubmitHandler(e)}>
        <FormInput
          onChangeHandler={onChangeHandler}
          inputValue={displayName}
          nameText="displayName"
          labelText="Display Name"
          type="text"
        />
        <FormInput
          onChangeHandler={onChangeHandler}
          inputValue={email}
          nameText="email"
          labelText="Email"
          type="email"
        />

        <FormInput
          onChangeHandler={onChangeHandler}
          inputValue={password}
          nameText="password"
          labelText="Password"
          type="password"
        />

        <FormInput
          onChangeHandler={onChangeHandler}
          inputValue={confirmPassword}
          nameText="confirmPassword"
          labelText="Confirm Password"
          type="password"
        />

        <Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit">
          Sign Up
        </Button>
      </form>
    </SignUpContainer>
  );
};

//styles
const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }
`;

export default SignUpForm;

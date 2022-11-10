import { useState, useEffect } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-up-form.styles.scss";

const SignUpForm = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  useEffect(() => {
    console.log(formFields);
  }, [formFields]);

  const onChangeHandler = e => {
    setFormFields(() => ({
      ...formFields,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = async e => {
    e.preventDefault();
    console.log("FROM ON SUBMIT HANDLER");
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
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form action="" onSubmit={e => onSubmitHandler(e)}>
        <FormInput
          onChangeHandler={onChangeHandler}
          inputValue={displayName}
          nameText="displayName"
          labelText="Display Name"
        />
        <FormInput
          onChangeHandler={onChangeHandler}
          inputValue={email}
          nameText="email"
          labelText="Email"
        />

        <FormInput
          onChangeHandler={onChangeHandler}
          inputValue={password}
          nameText="password"
          labelText="Password"
        />

        <FormInput
          onChangeHandler={onChangeHandler}
          inputValue={confirmPassword}
          nameText="confirmPassword"
          labelText="Confirm Password"
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;

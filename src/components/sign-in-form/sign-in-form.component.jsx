import { useState } from "react";
import {
  signInUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const SignInForm = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const onChangeHandler = e => {
    setFormFields(() => ({
      ...formFields,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = async e => {
    e.preventDefault();
    const { email, password } = formFields;
    const user = await signInUserWithEmailAndPassword(email, password);
    await createUserDocumentFromAuth(user.user);
    setFormFields(() => ({ ...defaultFormFields }));
  };
  return (
    <div>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form action="" onSubmit={e => onSubmitHandler(e)}>
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

        <Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit">
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignInForm;

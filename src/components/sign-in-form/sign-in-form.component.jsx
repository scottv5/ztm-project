import { useState, useEffect } from "react";
import {
  signInUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const SignInForm = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

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
    const { email, password } = formFields;
    const user = await signInUserWithEmailAndPassword(email, password);

    const res2 = await createUserDocumentFromAuth(user.user);
    console.log("5555555 user doc hopefuly 99999", res2.displayName);
    setFormFields(() => ({ ...defaultFormFields }));
  };
  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form action="" onSubmit={e => onSubmitHandler(e)}>
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

        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
};

export default SignInForm;

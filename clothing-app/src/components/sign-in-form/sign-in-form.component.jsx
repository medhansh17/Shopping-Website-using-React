import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import "./sign-in-form.styles.scss";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  //default form-fields to use
  email: "",
  password: "",
};
const showToastMessage = () => {
  toast.success("Signed In Successfully!", {
    position: "top-right",
  });
};
const showToastError = (error) => {
  toast.error(error, {
    position: "top-right",
  });
};
const SignInForm = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields); //setting form fields as ""
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup(); //auth state will change on sign-in
    navigate("/");
    showToastMessage();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      navigate("/");
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          showToastError("Wrong Password");
          break;
        case "auth/user-not-found":
          showToastError("no user associated with this email");
          break;
        case "auth/popup-closed-by-user":
          showToastError("Sign in failed!");
          break;
        default:
          showToastError(error.code);
          break;
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value }); //name = name of input field ,value = input's value,using spread operator we update the fields in form-fields
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

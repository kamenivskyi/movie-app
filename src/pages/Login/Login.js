import React, { useState } from "react";

import FormControl from "../../components/FormControl";
import { signInUser } from "../../firebase/firebaseUtils";
import { getErrorMessage } from "./loginUtils";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const { email, password } = form;

  const onSubmit = (e) => {
    e.preventDefault();
    signInUser(email, password).catch(handleError);
  };

  const handleError = (errorObj) => {
    const errMessage = getErrorMessage(errorObj);

    if (errMessage) {
      setErrorMessage(errMessage);
    } else {
      setErrorMessage("Error!");
    }
  };

  const onChange = ({ target: { value, name } }) => {
    setForm({ ...form, [name]: value });
  };

  if (errorMessage) {
    alert(errorMessage);
    setErrorMessage("");
  }

  return (
    <div className="container">
      <h2 className="section-title">Login</h2>
      <form className="form-container" onSubmit={onSubmit}>
        <FormControl
          type="email"
          id="loginEmail"
          aria-describedby="emailHelp"
          placeholder="Enter your email"
          name="email"
          label="Email address"
          value={email}
          onChange={onChange}
          required
        />
        <FormControl
          type="password"
          id="loginPassword"
          placeholder="Enter your password"
          name="password"
          label="Password"
          value={password}
          onChange={onChange}
          required
        />
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Login;

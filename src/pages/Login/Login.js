import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { auth } from "../../firebase/firebaseUtils";
import FormControl from "../../components/FormControl";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { email, password } = form;

  const onSubmit = (e) => {
    e.preventDefault();
    signInUser(email, password);
  };

  const signInUser = (email, password) => {
    auth.signInWithEmailAndPassword(email, password).then((res) => {
      console.log(res);
    });
  };

  const onChange = ({ target: { value, name } }) => {
    setForm({ ...form, [name]: value });
  };

  if (auth.currentUser) {
    return <Redirect to="/" />;
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

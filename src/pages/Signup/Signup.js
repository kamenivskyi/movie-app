import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import FormControl from "../../components/FormControl";
import { createUser } from "../../firebase/firebaseUtils";
import { auth } from "../../firebase/firebaseUtils";
import {
  validEmailRegex,
  validateNickname,
  validatePassword,
  validateForm,
} from "./SignupUtils";

const Signup = () => {
  const [state, setState] = useState({
    inputs: {
      nickname: "",
      email: "",
      password: "",
    },
    errors: {
      nickname: "",
      email: "",
      password: "",
    },
  });

  const { inputs, errors } = state;

  const handleChange = ({ target: { value, name } }) => {
    let errors = state.errors;

    const matchField = {
      nickname: () => {
        errors.nickname = validateNickname(value, inputs.password);
      },
      email: () => {
        errors.email = validEmailRegex.test(value) ? "" : "Email is invalid!";
      },
      password: () => {
        errors.password = validatePassword(inputs.nickname, value);
      },
    };

    matchField[name]();

    setState({ inputs: { ...state.inputs, [name]: value }, errors });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm(state.errors);

    if (isValid) {
      const { nickname, email, password } = state.inputs;

      createUser(nickname, email, password);
    } else {
      alert("Input fields are invalid!");
    }
  };

  if (auth.currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <div className="container">
      <h2 className="section-title">Signup</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <FormControl
          id="signupNickname"
          name="nickname"
          label="Nickname"
          placeholder="Type your nickname.."
          value={inputs.nickname}
          onChange={handleChange}
          error={errors.nickname}
          required
        />
        <FormControl
          type="email"
          id="signupEmail"
          label="Email adress"
          name="email"
          aria-describedby="emailHelp"
          placeholder="Type your email.."
          value={inputs.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
        <FormControl
          type="password"
          id="signupPassword"
          label="Password"
          name="password"
          placeholder="Type your password.."
          value={inputs.password}
          onChange={handleChange}
          error={errors.password}
          append={
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          }
          required
        />
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;

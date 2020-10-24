import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { auth } from '../../../firebase/firebase';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    signInUser(form.email, form.password);
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
    return <Redirect to='/' />;
  }

  return (
    <div className='container'>
      <h2 className='section-title'>Login</h2>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='loginEmail'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='loginEmail'
            aria-describedby='emailHelp'
            placeholder='Enter your email'
            value={form.email}
            name='email'
            onChange={onChange}
            required
          />
          <small id='emailHelp' className='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className='form-group'>
          <label htmlFor='loginPassword'>Password</label>
          <input
            type='password'
            className='form-control'
            id='loginPassword'
            value={form.password}
            placeholder='Enter your password'
            name='password'
            onChange={onChange}
            required
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};
export default connect(null)(Login);

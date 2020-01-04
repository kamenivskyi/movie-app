import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import FirebaseContext from '../../../../context/firebase/firebaseContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { createUser, isLoggedIn } = useContext(FirebaseContext);

  const onSubmit = e => {
    e.preventDefault();
    createUser(email, password);
    console.log(email);
    console.log(password);
  };
  const onChange = e => {
    if (e.target.type === 'email') {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };
  if (isLoggedIn) {
    return <Redirect to='/' />;
  }
  return (
    <div className='container'>
      <h2 className='section-title'>Signup</h2>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='signupEmail'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='signupEmail'
            value={email}
            onChange={onChange}
            aria-describedby='emailHelp'
            required
          />
          <small id='emailHelp' className='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className='form-group'>
          <label htmlFor='signupPassword'>Password</label>
          <input
            type='password'
            className='form-control'
            id='signupPassword'
            value={password}
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
export default Signup;

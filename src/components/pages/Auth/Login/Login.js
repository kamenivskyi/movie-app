import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import FirebaseContext from '../../../../context/firebase/firebaseContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signinUser, isLoggedIn } = useContext(FirebaseContext);

  const onSubmit = e => {
    e.preventDefault();
    signinUser(email, password);
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
      <h2 className='section-title'>Login</h2>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='loginEmail'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='loginEmail'
            aria-describedby='emailHelp'
            value={email}
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
export default Login;

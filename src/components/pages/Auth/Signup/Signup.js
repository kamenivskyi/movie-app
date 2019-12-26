import React from 'react';

const Signup = () => {
  return (
    <div className='container'>
      <h2 className='section-title'>Signup</h2>
      <form>
        <div className='form-group'>
          <label htmlFor='signupEmail'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='signupEmail'
            aria-describedby='emailHelp'
          />
          <small id='emailHelp' className='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className='form-group'>
          <label htmlFor='signupPassword'>Password</label>
          <input type='password' className='form-control' id='signupPassword' />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};
export default Signup;

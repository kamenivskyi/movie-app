import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import FirebaseContext from '../../../../context/firebase/firebaseContext';

import {
  auth,
  createUserProfileDocument,
  createUserOwnBookmarksArray
} from '../../../../firebase/firebase';

const Signup = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoggedIn, currentUser } = useContext(FirebaseContext);

  console.log(currentUser);

  // const onSubmit = e => {
  //   e.preventDefault();
  // createUser(nickname, email, password);
  //   console.log(email);
  //   console.log(password);
  // };

  const onChange = ({ target: { value, type } }) => {
    switch (type) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        setDisplayName(value);
        break;
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);

      await createUserProfileDocument(user, { displayName });
      await createUserOwnBookmarksArray(user);

      // this.clearFormsFields();
    } catch (error) {
      console.log(error);
    }
  };

  // const createUser = async (nickname, email, password) => {
  //   await auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(({ user }) => {
  //       console.log(user);
  //       db.collection('userBookmarks')
  //         .doc(user.uid)
  //         .set({ tv: [], movie: [] });

  //       db.collection('users')
  //         .doc(user.uid)
  //         .set({ nickname });
  //     })
  //     .catch(onValidationError);
  // };

  if (currentUser) {
    return <Redirect to='/' />;
  }
  return (
    <div className='container'>
      <h2 className='section-title'>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='signupNickname'>Nickname</label>
          <input
            type='text'
            className='form-control'
            id='signupNickname'
            value={displayName}
            onChange={onChange}
            required
          />
        </div>
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

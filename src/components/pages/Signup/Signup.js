import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { auth, db } from '../../../firebase/firebase';
import FormControl from '../../layout/FormControl/FormControl';

const Signup = () => {
  const [state, setState] = useState({
    inputs: { 
      nickname: '',
      email: '',
      password: '',
    },
    errors: {
      nickname: '',
      email: '',
      password: '',
    }
  });

  const { inputs, errors } = state;

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const validatePassword = (name, password) => { 
    const isEqual = compareNameWithPassword(name, password);

    if (password.length < 7 && !isEqual) {
      return 'Password must be at least 7 characters long!';
    }
    if (password.trim().length < 7 && !isEqual) {
      return 'Password must not be only with spaces!'
    }
    if (isEqual) {
      return 'The password and nickname must not be equal!';
    }

    return '';
  }

  const validateNickname = (name, password) => {
    const isEqual = compareNameWithPassword(name, password);

    if (name.length < 5 && !isEqual) {
      return 'The nickname length must be greater that 4';
    }
    if (isEqual) {
      return 'The password and nickname must not be equal!';
    }

    return '';
  }


  const compareNameWithPassword = (name, password) => {
    if (name.toLowerCase() === password.toLowerCase()) {
      return true;
    }
    return false;
  }

  const handleChange = ({ target: { value, name } }) => {
    let errors = state.errors;

    const matchField = {
      'nickname': () => {
        errors.nickname = validateNickname(value, inputs.password); 
      },
      'email': () => {
        errors.email = validEmailRegex.test(value) ? '' : 'Email is invalid!';
      },
      'password': () => {
        errors.password = validatePassword(inputs.nickname, value); 
      }
    };

    matchField[name]();

    setState({ inputs: {...state.inputs, [name]: value }, errors})
  };


  const validateForm = (errors) => {
    let isValid = true;

    Object.values(errors).forEach(val => val.length > 0 && (isValid = false));
    
    return isValid;
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validateForm(state.errors);

    if (isValid) {
      const { nickname, email, password } = state.inputs;

      createUser(nickname, email, password);
    }
    else {
      alert('Input fields are invalid!')
    }
  };

  const createUser = async (nickname, email, password) => {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        db.collection('userBookmarks').doc(user.uid).set({ tv: [], movie: [] });
        db.collection('users').doc(user.uid).set({ nickname, email });
      })
      .catch(onValidationError);
  };

  const onValidationError = (error) => {
    console.log(error);
  };

  if (auth.currentUser) {
    return <Redirect to='/' />;
  }
  return (
    <div className='container'>
      <h2 className='section-title'>Signup</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto'}}>
        <FormControl
          id='signupNickname'
          name='nickname'
          label='Nickname'
          placeholder='Type your nickname..'
          value={inputs.nickname}
          onChange={handleChange}
          error={errors.nickname}
          required
        />
        <FormControl
          type='email'
          id='signupEmail'
          label='Email adress'
          name='email'
          aria-describedby='emailHelp'
          placeholder='Type your email..'
          value={inputs.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
        <FormControl
          type='password'
          id='signupPassword'
          label='Password'
          name='password'
          placeholder='Type your password..'
          value={inputs.password}
          onChange={handleChange}
          error={errors.password}
          append={ 
            <small id='emailHelp' className='form-text text-muted'>
              We'll never share your email with anyone else.
            </small>
          }
          required
        />
        <button type='submit' className='btn btn-primary w-100'>
          Submit
        </button>
      </form>
    </div>
  );
};


export default Signup;

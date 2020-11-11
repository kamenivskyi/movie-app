import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { auth } from './firebase/firebaseUtils';

import Routes from './routes';
import Navbar from './components/layout/Navbar';
import ButtonToTop from './components/layout/ButtonToTop';

import { setUserData } from './redux/firebase/firebaseActions';
import './App.css';

const App = () => {
  const { userData } = useSelector(({ firebase }) => firebase);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log('fired auth from app');
        dispatch(setUserData(userAuth));
      }
    });
  }, []);

  console.log('app user', userData);


  return (
    <>
      <Navbar />
      <Routes />
      <ButtonToTop />
    </>
  );
};

export default App;

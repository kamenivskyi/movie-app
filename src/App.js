import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { auth, db } from './firebase/firebaseUtils';

import Routes from './routes';
import Navbar from './components/layout/Navbar';
import ButtonToTop from './components/layout/ButtonToTop';

import './App.css';
import { setUserData } from './redux/firebase/firebaseActions';

const App = ({ setUserData, userData }) => {

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log('fired auth from app');
        setUserData(userAuth);
      }
    });
  }, []);

  console.log("userData", userData);

  return (
    <>
      <Navbar />
      <Routes />
      <ButtonToTop />
    </>
  );
};

const mapStateToProps = (state) => ({
  userData: state.firebase.userData,
});

export default connect(mapStateToProps, { setUserData })(App);

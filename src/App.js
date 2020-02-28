import React, { useEffect } from 'react';

import FirebaseState from './context/firebase/FirebaseState';
import AlertState from './context/alert/AlertState';
import MovieState from './context/movie/MovieState';
import ResultsState from './context/results/ResultsState';
import TrendingState from './context/trending/TrendingState';
import BannerState from './context/banner/BannerState';

import { auth } from './firebase/firebase';

import Routes from './routes';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import ButtonToTop from './components/layout/ButtonToTop';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootswatch/dist/cyborg/bootstrap.min.css';

import './App.css';

const App = () => {
  // useEffect(() => {
  //   unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);

  //       userRef.onSnapshot(snapshot => {
  //         setCurrentUser({
  //           id: snapshot.id,
  //           ...snapshot.data()
  //         });
  //       });
  //     }
  //     setCurrentUser(userAuth);
  //   });
  // if (userAuth) {
  //   const doc = db.collection('users').doc(userAuth.uid);

  //   doc.get().then(doc => {
  //     dispatch({ type: SET_USER_DATA, payload: doc.data() });
  //     dispatch({ type: SET_USER, payload: userAuth });
  //   });
  // } else {
  //   console.log('User is signed out');
  // }
  //   });
  // }, []);

  return (
    <AlertState>
      <MovieState>
        <ResultsState>
          <TrendingState>
            <FirebaseState>
              <BannerState>
                <Navbar />
                <Routes />
                <Alert />
                <ButtonToTop />
              </BannerState>
            </FirebaseState>
          </TrendingState>
        </ResultsState>
      </MovieState>
    </AlertState>
  );
};

export default App;

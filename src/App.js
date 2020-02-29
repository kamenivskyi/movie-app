import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';

import FirebaseState from './context/firebase/FirebaseState';

import Routes from './routes';
import Navbar from './components/layout/Navbar';
import ButtonToTop from './components/layout/ButtonToTop';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootswatch/dist/cyborg/bootstrap.min.css';

import './App.css';

const App = () => (
  <Provider store={store}>
    <FirebaseState>
      <Navbar />
      <Routes />
      <ButtonToTop />
    </FirebaseState>
  </Provider>
);

export default App;

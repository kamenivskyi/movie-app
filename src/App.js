import React from 'react';

import FirebaseState from './context/firebase/FirebaseState';
import AlertState from './context/alert/AlertState';
import MovieState from './context/movie/MovieState';
import ResultsState from './context/results/ResultsState';
import TrendingState from './context/trending/TrendingState';
import BannerState from './context/banner/BannerState';

import Routes from './routes';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import ButtonToTop from './components/layout/ButtonToTop';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootswatch/dist/cyborg/bootstrap.min.css';

import './App.css';

const App = () => {
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

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Navbar from './components/layout/Navbar';
import FirebaseState from './context/firebase/FirebaseState';
import AlertState from './context/alert/AlertState';
import MovieState from './context/movie/MovieState';
import ResultsState from './context/results/ResultsState';
import TrendingState from './context/trending/TrendingState';
import BannerState from './context/banner/BannerState';
import Alert from './components/layout/Alert';
import ButtonToTop from './components/layout/ButtonToTop';
import './App.css';

const App = () => {
  return (
    <AlertState>
      <MovieState>
        <ResultsState>
          <TrendingState>
            <FirebaseState>
              <BannerState>
                <BrowserRouter>
                  <Navbar />
                  <Routes />
                  <Alert />
                  <ButtonToTop />
                </BrowserRouter>
              </BannerState>
            </FirebaseState>
          </TrendingState>
        </ResultsState>
      </MovieState>
    </AlertState>
  );
};

export default App;

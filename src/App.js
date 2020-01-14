import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Routes from './routes';
import FirebaseState from './context/firebase/FirebaseState';
import AlertState from './context/alert/AlertState';
import MovieState from './context/movie/MovieState';
import ResultsState from './context/results/ResultsState';
import TrendingState from './context/trending/TrendingState';
import Alert from './components/layout/Alert';
import './App.css';

const App = () => {
  return (
    <FirebaseState>
      <AlertState>
        <MovieState>
          <ResultsState>
            <TrendingState>
              <BrowserRouter>
                <Navbar />
                <Routes />
                <Alert />
              </BrowserRouter>
            </TrendingState>
          </ResultsState>
        </MovieState>
      </AlertState>
    </FirebaseState>
  );
};

export default App;

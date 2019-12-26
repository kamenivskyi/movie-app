import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Routes from './routes';
import MovieState from './context/movie/MovieState';
import ResultsState from './context/results/ResultsState';
import PopularState from './context/popular/PopularState';
import './App.css';

const App = () => {
  return (
    <MovieState>
      <ResultsState>
        <PopularState>
          <BrowserRouter>
            <Navbar />
            <Routes />
          </BrowserRouter>
        </PopularState>
      </ResultsState>
    </MovieState>
  );
};

export default App;

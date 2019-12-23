import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Routes from './routes';
import MovieState from './context/movie/MovieState';
import ResultsState from './context/results/ResultsState';
import './App.css';

const App = () => {
  return (
    <MovieState>
      <ResultsState>
        <BrowserRouter>
          <Navbar />
          <Routes />
        </BrowserRouter>
      </ResultsState>
    </MovieState>
  );
};

export default App;

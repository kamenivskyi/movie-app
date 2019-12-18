import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Movie from './components/pages/Movie';
import PersonInfo from './components/pages/PersonInfo';
import GenreMovies from './components/genres/GenreMovies';
import MovieState from './context/movie/MovieState';
import './App.css';

const App = () => {
  return (
    <MovieState>
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/movie/:id' component={Movie} />
            <Route exact path='/genre/:id' component={GenreMovies} />
            <Route exact path='/person/:id' component={PersonInfo} />
          </Switch>
        </div>
      </BrowserRouter>
    </MovieState>
  );
};

export default App;

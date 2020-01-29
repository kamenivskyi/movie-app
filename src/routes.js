import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Movie from './components/pages/Movie';
import PersonInfo from './components/pages/PersonInfo';
import GenreMovies from './components/pages/Movie/genres/GenreMovies';
import People from './components/pages/People';
import Results from './components/pages/Results';
import Trending from './components/pages/Trending';
import Tv from './components/pages/Tv';
import About from './components/pages/About';
import Profile from './components/pages/Profile';
import Login from './components/pages/Auth/Login';
import Signup from './components/pages/Auth/Signup';
import NotFound from './components/pages/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/movie/:id' component={Movie} />
      <Route exact path='/tv/:id' component={Tv} />
      <Route exact path='/genre/:id' component={GenreMovies} />
      <Route exact path='/person/:id' component={PersonInfo} />
      <Route exact path='/people' component={People} />
      <Route exact path='/trending' component={Trending} />

      {/* <Route exact path='/trending/movie' component={Trending} />
      <Route exact path='/trending/tv' component={Trending} /> */}

      <Route exact path='/about' component={About} />
      <Route exact path='/results/:query' component={Results} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
      <Route component={NotFound} />
    </Switch>
  );
};
export default Routes;

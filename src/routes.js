import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Movie from './components/pages/Movie';
import PersonInfo from './components/pages/PersonInfo';
import GenreMovies from './components/pages/Movie/genres/GenreMovies';
import People from './components/pages/People';
import Results from './components/pages/Results';
import Popular from './components/pages/Popular';
import About from './components/pages/About';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/movie/:id' component={Movie} />
      <Route exact path='/genre/:id' component={GenreMovies} />
      <Route exact path='/person/:id' component={PersonInfo} />
      <Route exact path='/people' component={People} />
      <Route exact path='/popular' component={Popular} />
      <Route exact path='/about' component={About} />
      <Route exact path='/results/:query' component={Results} />
    </Switch>
  );
};
export default Routes;

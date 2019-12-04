import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Filters from './components/filters/filters';
import Movies from './components/Movies';
import Row from './components/Row';
import MovieService from './services/movie-service';
import './App.css';

class App extends Component {
  service = new MovieService();
  state = {
    movies: []
  };

  componentDidMount() {
    this.service.searchMovies('predator').then(res => console.log(res));
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <div className='container-fluid'>
            <Switch>
              <Route path='/' />
            </Switch>
            <Row left={<Filters />} right={<Movies />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

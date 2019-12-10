import React, { Component } from 'react';
import MovieService from '../services/movie-service';
import MovieItem from './MovieItem';

class Movies extends Component {
  service = new MovieService();

  state = {
    results: []
  };

  componentDidMount() {
    this.service
      .getTrendingMovies()
      .then(({ results }) => this.setState({ results }));
  }

  render() {
    const { results } = this.state;
    return (
      <div className='row'>
        <MovieItem movies={results} />
      </div>
    );
  }
}
export default Movies;

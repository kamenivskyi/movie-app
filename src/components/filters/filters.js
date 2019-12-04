import React, { Component } from 'react';
import GenresView from './genres-view';
import MovieService from '../../services/movie-service';

class Filters extends Component {
  state = {
    genres: []
  };
  service = new MovieService();

  componentDidMount() {
    this.service.getGenres().then(genres => {
      this.setState({ genres });
    });
  }

  render() {
    const { genres } = this.state;
    return (
      <React.Fragment>
        <GenresView genres={genres} />
      </React.Fragment>
    );
  }
}

export default Filters;

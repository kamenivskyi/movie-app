import React from 'react';
import PropTypes from 'prop-types';

import { auth, addToDatabaseBookmarks } from '../../../firebase/firebaseUtils';

import MediaDescription from '../../layout/MediaDescription';
import Finances from '../../layout/Finances';
import Cast from '../../layout/Cast';
import Studios from '../../layout/Studios';
import Companies from '../../layout/Companies';
import Networks from '../../layout/Networks/Networks';
import BtnShowVideo from '../../layout/Video/BtnShowVideo';
import  Button from '../../layout/Button';

import config from '../../../utils/config';
import { mediaPropTypes } from '../../../utils/mediaViewPropTypes';

import reserveBg from '../../../assets/images/reserve-bg.jpg';
import withSpinner from '../../../hoc-helpers/withSpinner';

const MovieView = ({ movie, cast, video, id, type }) => {
  const {
    title,
    poster_path,
    backdrop_path,
    overview,
    genres,
    budget,
    revenue,
    release_date,
    runtime,
    vote_average,
    production_companies,
    networks,
  } = movie;

  const { original, medium } = config.API_IMAGE;

  const createMovieObj = () => ({
    id,
    title,
    type,
    poster_path,
    vote_average,
  });

  console.log(movie);

  const handleAddToBookmarks = () => {
    const movieObject = createMovieObj();
    addToDatabaseBookmarks(movieObject, type);
  };

  const image = backdrop_path ? original + backdrop_path : reserveBg;

  return (
    <section className='movie-section'>
      <div className='movie' style={{ backgroundImage: `url(${image})` }}>
        {title && <h3 className='movie-title'>{title}</h3>}
        <div className='item-row'>
          <div className='movie-img-wrapp'>
            <img className='movie-img' src={medium + poster_path} alt={title} />
            {video && <BtnShowVideo url={video.key} />}
            {auth.currentUser && (
              <Button
                className='btn btn-primary mt-3'
                onClick={handleAddToBookmarks}
                data-id={id}
                data-type={type}
              >
                <i className='fas fa-bookmark'></i> &nbsp; To bookmarks
              </Button>
            )}
          </div>

          <MediaDescription
            overview={overview}
            releaseDate={release_date}
            genres={genres}
            runtime={runtime}
          />
        </div>
      </div>
      <Studios
        postitionTop={<Companies data={production_companies} />}
        positionBottom={<Networks data={networks} />}
      />
      <Finances budget={budget} revenue={revenue} />
      <Cast data={cast} />
    </section>
  );
};

MovieView.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    ...mediaPropTypes,
  }),
  cast: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string,
  type: PropTypes.string,
};

const MovieViewWithSpinner = withSpinner(MovieView);

export default MovieViewWithSpinner;

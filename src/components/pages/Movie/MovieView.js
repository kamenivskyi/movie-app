import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Finances from './Finances';
import Cast from './Cast';
import withSpinner from '../../hoc-helpers/withSpinner';
import MovieDescription from './MovieDescription';
import ItemRow from '../../common/ItemRow';
import BtnShowVideo from '../../layout/Video/BtnShowVideo';
import config from '../../../config';
import reserveBg from './reserve-bg.jpg';

const MovieView = ({ movie, cast, video }) => {
  const {
    title,
    poster_path,
    backdrop_path,
    overview,
    genres,
    budget,
    revenue,
    release_date,
    runtime
  } = movie;

  const {
    API_IMAGE: { original, medium }
  } = config;

  const image = backdrop_path ? original + backdrop_path : reserveBg;

  return (
    <Fragment>
      <div className='movie' style={{ backgroundImage: `url(${image})` }}>
        {title && <h3 className='movie-title'>{title}</h3>}
        <ItemRow>
          <div className='movie-img-wrapp'>
            <img className='movie-img' src={medium + poster_path} alt={title} />
            {video && <BtnShowVideo url={video.key} />}
            <button className='btn btn-primary mt-3'>
              <i className='fas fa-bookmark'></i> &nbsp; To bookmarks
            </button>
          </div>
          <MovieDescription
            overview={overview}
            releaseDate={release_date}
            genres={genres}
            runtime={runtime}
          />
        </ItemRow>
      </div>
      <Finances budget={budget} revenue={revenue} />
      <Cast data={cast} />
    </Fragment>
  );
};

MovieView.propTypes = {
  movie: PropTypes.object,
  cast: PropTypes.array,
  video: PropTypes.object
};

export default withSpinner(MovieView);

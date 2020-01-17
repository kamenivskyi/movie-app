import React, { Fragment, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import FirebaseContext from '../../../context/firebase/firebaseContext';
// import withSpinner from '../../hoc-helpers/withSpinner';
import Finances from './Finances';
import Cast from './Cast';
import MovieDescription from './MovieDescription';
import ItemRow from '../../common/ItemRow';
import BtnShowVideo from '../../layout/Video/BtnShowVideo';
import config from '../../../config';
import reserveBg from './reserve-bg.jpg';

const MovieView = ({ movie, cast, video, id, type }) => {
  const { isLoggedIn, addToBookmarks } = useContext(FirebaseContext);
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
    vote_average
  } = movie;

  useEffect(() => {
    console.log('Movie view use effect', movie);
  });

  const { original, medium } = config.API_IMAGE;

  const handleClick = e => {
    const id = e.target.getAttribute('data-id');
    const type = e.target.getAttribute('data-type');
    const obj = _createObj(id, type);
    addToBookmarks(obj, 'movies');
  };

  const _createObj = (id, type) => {
    return { id, title, type, poster_path, vote_average };
  };

  const image = backdrop_path ? original + backdrop_path : reserveBg;

  return (
    <Fragment>
      <div className='movie' style={{ backgroundImage: `url(${image})` }}>
        {title && <h3 className='movie-title'>{title}</h3>}
        <ItemRow>
          <div className='movie-img-wrapp'>
            <img className='movie-img' src={medium + poster_path} alt={title} />
            {video && <BtnShowVideo url={video.key} />}
            {isLoggedIn && (
              <button
                className='btn btn-primary mt-3'
                onClick={handleClick}
                data-id={id}
                data-type={type}
              >
                <i className='fas fa-bookmark'></i> &nbsp; To bookmarks
              </button>
            )}
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
  cast: PropTypes.array
};

export default MovieView;

import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import withSpinner from '../../hoc-helpers/withSpinner';

import FirebaseContext from '../../../context/firebase/firebaseContext';
import Finances from './Finances';
import Cast from '../../layout/Cast';
import MediaDescription from '../../layout/MediaDescription';
import Companies from '../../layout/Companies/Companies';
import Networks from '../../layout/Networks/Networks';
import MediaContainer from '../../common/MediaContainer';
import BtnShowVideo from '../../layout/Video/BtnShowVideo';

import { Button } from '../../proxy/Button';

import { onGetTypeAndId } from '../../../utils/helpers';
import config from '../../../utils/config';

import reserveBg from '../../../assets/images/reserve-bg.jpg';

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
    vote_average,
    production_companies,
    networks
  } = movie;

  useEffect(() => {
    console.log('Movie view use effect', movie);
  });

  const { original, medium } = config.API_IMAGE;

  const _createObj = (id, type) => {
    return { id, title, type, poster_path, vote_average };
  };

  const handleGetTypeAndId = onGetTypeAndId(_createObj, addToBookmarks);

  const image = backdrop_path ? original + backdrop_path : reserveBg;

  return (
    <section className='movie-section'>
      <div className='movie' style={{ backgroundImage: `url(${image})` }}>
        {title && <h3 className='movie-title'>{title}</h3>}
        <MediaContainer>
          <div className='movie-img-wrapp'>
            <img className='movie-img' src={medium + poster_path} alt={title} />
            {video && <BtnShowVideo url={video.key} />}
            {isLoggedIn && (
              <Button
                className='btn btn-primary mt-3'
                onClick={handleGetTypeAndId}
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
        </MediaContainer>
      </div>
      <Networks data={networks} />
      <Companies data={production_companies} />
      <Finances budget={budget} revenue={revenue} />
      <Cast data={cast} />
    </section>
  );
};

MovieView.propTypes = {
  movie: PropTypes.object,
  cast: PropTypes.array
};

export default withSpinner(MovieView);

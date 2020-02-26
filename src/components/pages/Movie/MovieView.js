import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import withSpinner from '../../hoc-helpers/withSpinner';

import FirebaseContext from '../../../context/firebase/firebaseContext';

import MediaDescription from '../../layout/MediaDescription';
import Finances from '../../layout/Finances';
import Cast from '../../layout/Cast';
import Studios from '../../layout/Studios';
import Companies from '../../layout/Companies';
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

  const _createObj = (id, type) => ({
    id,
    title,
    type,
    poster_path,
    vote_average
  });

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
    poster_path: PropTypes.string,
    backdrop_path: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.array,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    vote_average: PropTypes.number,
    production_companies: PropTypes.arrayOf(PropTypes.object),
    networks: PropTypes.arrayOf(PropTypes.object)
  }),
  cast: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string,
  type: PropTypes.string
};

export default withSpinner(MovieView);

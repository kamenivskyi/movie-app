import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';

import withSpinner from '../../hoc-helpers/withSpinner';

import FirebaseContext from '../../../context/firebase/firebaseContext';
import Cast from '../../layout/Cast';
import MediaDescription from '../../layout/MediaDescription';
import ItemRow from '../../common/ItemRow';
import BtnShowVideo from '../../layout/Video/BtnShowVideo';

import { Button } from '../../proxy/Button';

import { onGetTypeAndId } from '../../../utils/helpers';
import config from '../../../utils/config';

import reserveBg from '../../../assets/images/reserve-bg.jpg';

const TvView = ({ tv, cast, video, type }) => {
  const { isLoggedIn, addToBookmarks } = useContext(FirebaseContext);

  const {
    name,
    poster_path,
    backdrop_path,
    overview,
    genres,
    first_air_date,
    runtime,
    vote_average,
    id
  } = tv;

  const { original, medium } = config.API_IMAGE;

  const image = backdrop_path ? original + backdrop_path : reserveBg;

  const _createObj = (id, type) => {
    return { id, name, type, poster_path, vote_average };
  };

  const handleGetTypeAndId = onGetTypeAndId(_createObj, addToBookmarks);

  return (
    <Fragment>
      <div className='movie' style={{ backgroundImage: `url(${image})` }}>
        {name && <h3 className='movie-title'>{name}</h3>}
        <ItemRow>
          <div className='movie-img-wrapp'>
            <img className='movie-img' src={medium + poster_path} alt={name} />
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
            releaseDate={first_air_date}
            genres={genres}
            runtime={runtime}
          />
        </ItemRow>
      </div>
      <Cast data={cast} />
    </Fragment>
  );
};

TvView.propTypes = {
  movie: PropTypes.object,
  cast: PropTypes.array
};

export default withSpinner(TvView);

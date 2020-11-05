import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { auth } from '../../../firebase/firebaseUtils';

import { addToDatabaseBookmarks } from '../../../firebase/firebaseUtils';

import Cast from '../../layout/Cast';
import MediaDescription from '../../layout/MediaDescription';
import Studios from '../../layout/Studios';
import Companies from '../../layout/Companies';
import Networks from '../../layout/Networks/Networks';
import BtnShowVideo from '../../layout/Video/BtnShowVideo';
import { Button } from '../../common/Button';

import Spinner from '../../common/Spinner';

import config from '../../../utils/config';
import { mediaPropTypes } from '../../../utils/mediaViewPropTypes';

import reserveBg from '../../../assets/images/reserve-bg.jpg';

const TvView = ({ tv, cast, video, type, loading, addToDatabaseBookmarks }) => {
  const {
    name,
    poster_path,
    backdrop_path,
    overview,
    genres,
    first_air_date,
    runtime,
    vote_average,
    id,
    production_companies,
    networks,
  } = tv;

  console.log(tv);

  const { original, medium } = config.API_IMAGE;

  const image = backdrop_path ? original + backdrop_path : reserveBg;

  const createObj = () => ({
    id,
    name,
    type,
    poster_path,
    vote_average,
  });

  const handleAddToBookmarks = () => {
    const tvObject = createObj();
    addToDatabaseBookmarks(tvObject, type);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <section>
      <div className='movie' style={{ backgroundImage: `url(${image})` }}>
        {name && <h3 className='movie-title'>{name}</h3>}
        <div className='item-row'>
          <div className='movie-img-wrapp'>
            <img className='movie-img' src={medium + poster_path} alt={name} />
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
            releaseDate={first_air_date}
            genres={genres}
            runtime={runtime}
          />
        </div>
      </div>
      <Studios
        postitionTop={<Companies data={production_companies} />}
        positionBottom={<Networks data={networks} />}
      />
      <Cast data={cast} />
    </section>
  );
};

TvView.propTypes = {
  tv: PropTypes.shape({
    name: PropTypes.string,
    ...mediaPropTypes,
  }),
  cast: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string,
  type: PropTypes.string,
};

export default connect(null, { addToDatabaseBookmarks })(TvView);

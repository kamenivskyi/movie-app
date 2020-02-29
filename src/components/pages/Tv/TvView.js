import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import withSpinner from '../../hoc-helpers/withSpinner';

import FirebaseContext from '../../../context/firebase/firebaseContext';

import Cast from '../../layout/Cast';
import MediaContainer from '../../common/MediaContainer';
import MediaDescription from '../../layout/MediaDescription';
import Studios from '../../layout/Studios';
import Companies from '../../layout/Companies';
import Networks from '../../layout/Networks/Networks';
import BtnShowVideo from '../../layout/Video/BtnShowVideo';

import { Button } from '../../proxy/Button';

import { onGetTypeAndId } from '../../../utils/helpers';
import config from '../../../utils/config';

import reserveBg from '../../../assets/images/reserve-bg.jpg';

const TvView = ({ tv, cast, video, type }) => {
  const { currentUser, addToBookmarks } = useContext(FirebaseContext);

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
    networks
  } = tv;

  console.log(tv);

  const { original, medium } = config.API_IMAGE;

  const image = backdrop_path ? original + backdrop_path : reserveBg;

  const _createObj = (id, type) => ({
    id,
    name,
    type,
    poster_path,
    vote_average
  });

  const handleGetTypeAndId = onGetTypeAndId(_createObj, addToBookmarks);

  return (
    <section>
      <div className='movie' style={{ backgroundImage: `url(${image})` }}>
        {name && <h3 className='movie-title'>{name}</h3>}
        <MediaContainer>
          <div className='movie-img-wrapp'>
            <img className='movie-img' src={medium + poster_path} alt={name} />
            {video && <BtnShowVideo url={video.key} />}
            {currentUser && (
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
        </MediaContainer>
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
    poster_path: PropTypes.string,
    backdrop_path: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.array,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    first_air_date: PropTypes.string,
    runtime: PropTypes.number,
    vote_average: PropTypes.number,
    production_companies: PropTypes.arrayOf(PropTypes.object),
    networks: PropTypes.arrayOf(PropTypes.object)
  }),
  cast: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string,
  type: PropTypes.string
};

export default withSpinner(TvView);

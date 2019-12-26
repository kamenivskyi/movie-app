import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Cast from '../Movie/Cast';
import withSpinner from '../../hoc-helpers/withSpinner';
import MovieDescription from '../Movie/MovieDescription';
import ItemRow from '../../common/ItemRow';
import BtnShowVideo from '../../layout/Video/BtnShowVideo';
import config from '../../../config';
import reserveBg from '../Movie/reserve-bg.jpg';

const TvView = ({ tv, cast, video }) => {
  const {
    name,
    poster_path,
    backdrop_path,
    overview,
    genres,
    first_air_date,
    runtime
  } = tv;
  console.log(tv);

  const {
    API_IMAGE: { original, medium }
  } = config;

  const image = backdrop_path ? original + backdrop_path : reserveBg;

  return (
    <Fragment>
      <div className='movie' style={{ backgroundImage: `url(${image})` }}>
        {name && <h3 className='movie-title'>{name}</h3>}
        <ItemRow>
          <div className='movie-img-wrapp'>
            <img className='movie-img' src={medium + poster_path} alt={name} />
            {video && <BtnShowVideo url={video.key} />}
            <button className='btn btn-primary mt-3'>
              <i className='fas fa-bookmark'></i> &nbsp; To bookmarks
            </button>
          </div>
          <MovieDescription
            overview={overview}
            releaseDate={first_air_date}
            genres={genres}
            runtime={runtime}
          />
        </ItemRow>
        <Cast data={cast} />
      </div>
    </Fragment>
  );
};

TvView.propTypes = {
  movie: PropTypes.object,
  cast: PropTypes.array
};

export default withSpinner(TvView);

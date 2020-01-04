import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Finances from './Finances';
import Cast from './Cast';
import withSpinner from '../../hoc-helpers/withSpinner';
import MovieDescription from './MovieDescription';
import ItemRow from '../../common/ItemRow';
import BtnShowVideo from '../../layout/Video/BtnShowVideo';
import config from '../../../config';
import reserveBg from './reserve-bg.jpg';

const MovieView = ({ movie, cast, video, id }) => {
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

  useEffect(() => {
    console.log('Movie view use effect');
  });

  console.log(id);

  const {
    API_IMAGE: { original, medium }
  } = config;

  const getBookmarks = () => {
    let bookmarks;
    if (localStorage.getItem('bookmarks') === null) {
      bookmarks = [];
    } else {
      bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    }

    return bookmarks;
  };

  // const addToBookmarks = () => {
  //   // localStorage.setItem('')
  //   let bookmarks;
  //   if (localStorage.getItem('bookmarks') === null) {
  //     bookmarks = [];
  //   } else {
  //     bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  //     console.log(bookmarks);
  //   }

  //   return bookmarks;
  // };
  const handleClick = e => {
    const id = e.target.getAttribute('data-id');
    console.log(id);
    localStorage.setItem('id', JSON.stringify(id));

    // return id => {
    //   let bookmarks;
    //   if (localStorage.getItem('bookmarks') === null) {
    //     bookmarks = [];
    //   } else {
    //     bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //   }

    //   bookmarks.push(id);

    //   localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    // const bookmarks = getBookmarks();
    // bookmarks.push(id);
    // localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    // };
  };
  // const addToBookmarks = bookmark => {
  //   const bookmarks = getBookmarks();

  //   bookmarks.push(bookmark);

  //   localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  // };

  const image = backdrop_path ? original + backdrop_path : reserveBg;

  return (
    <Fragment>
      <div className='movie' style={{ backgroundImage: `url(${image})` }}>
        {title && <h3 className='movie-title'>{title}</h3>}
        <ItemRow>
          <div className='movie-img-wrapp'>
            <img className='movie-img' src={medium + poster_path} alt={title} />
            {video && <BtnShowVideo url={video.key} />}

            <button
              className='btn btn-primary mt-3'
              onClick={handleClick}
              data-id={id}
            >
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
  cast: PropTypes.array
};

export default withSpinner(MovieView);

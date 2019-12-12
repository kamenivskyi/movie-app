import React from 'react';
import Genres from '../../genres/Genres';
import Finances from './Finances';
import Cast from './Cast';
import Row from './../../Row';
// import Companies from './Companies';

const MovieView = ({ movie, cast }) => {
  console.log(movie);
  console.log(cast);
  // const { base, cast } = data;
  // console.log(base);

  const {
    title,
    id,
    poster_path,
    backdrop_path,
    overview,
    genres,
    budget,
    revenue
  } = movie;

  const bgImage = `https://image.tmdb.org/t/p/w1280/${poster_path}`;
  const image = `https://image.tmdb.org/t/p/w500${backdrop_path}`;

  return (
    <React.Fragment>
      <div
        className='card movie mb-3'
        style={{
          backgroundImage: `url(${bgImage})`
        }}
      >
        <div className='row no-gutters'>
          <div className='col-md-4'>
            <img src={image} className='card-img' alt={title} />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              {title && <h3 className='card-title'>{title}</h3>}
              {overview && (
                <>
                  <h4>Description: </h4>
                  <p className='card-text'>{overview}</p>
                </>
              )}
              <Genres genres={genres} />
            </div>
          </div>
        </div>
        <Cast data={cast} />
        <Finances budget={budget} revenue={revenue} />
      </div>
    </React.Fragment>
  );
};

const MovieBase = () => {};
export default MovieView;

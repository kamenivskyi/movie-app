import React from 'react';
import Flip from 'react-reveal/Flip';
import { Link } from 'react-router-dom';
import config from '../../config';
import NotFound from './not-found.jpg';

const TvItemView = props => {
  const { large } = config.API_IMAGE;
  console.log(props);
  // console.log(props.type);

  return (
    <Flip left cascade>
      {props.array.map(item => {
        console.log(item);
        const { name, poster_path, vote_average, id } = item;
        const image = poster_path ? large + poster_path : NotFound;

        return (
          <div className='col-sm-6 col-md-4 col-lg-3 mb-3' key={id}>
            <div className='card'>
              <img className='img-fluid' src={image} alt={name} />
              <span className='badge badge-success position-absolute my-1'>
                Rating: {vote_average}
              </span>
              <Link to={`/${props.type || 'tv'}/${id}`} className='py-2'>
                {name}
              </Link>
            </div>
          </div>
        );
      })}
    </Flip>
  );
};
export default TvItemView;

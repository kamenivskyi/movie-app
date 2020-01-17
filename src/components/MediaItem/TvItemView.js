import React, { useContext } from 'react';
import Flip from 'react-reveal/Flip';
import { Link, withRouter } from 'react-router-dom';
import FirebaseContext from '../../context/firebase/firebaseContext';
import config from '../../config';
import NotFound from './not-found.jpg';

const TvItemView = ({ array, type, history }) => {
  const { large } = config.API_IMAGE;
  const { deleteBookmark } = useContext(FirebaseContext);

  return (
    <Flip left cascade>
      {array.map(item => {
        console.log(item);
        const { name, poster_path, vote_average, id } = item;
        const image = poster_path ? large + poster_path : NotFound;
        const isProfilePage = history.location.pathname === '/profile';
        const obj = { id, poster_path, name, type: 'tv', vote_average };

        return (
          <div className='col-sm-6 col-md-4 col-lg-3 mb-3' key={`tv${id}`}>
            <div className='card'>
              <img className='img-fluid' src={image} alt={name} />
              <span className='badge badge-success position-absolute my-1'>
                Rating: {vote_average}
              </span>
              {isProfilePage && (
                <button
                  className='btn btn-warning delete-bookmark'
                  onClick={() => deleteBookmark(obj, 'tvs')}
                  title='delete bookmark'
                >
                  <i className='fas fa-trash-alt'></i>
                </button>
              )}
              <Link to={`/${type || 'tv'}/${id}`} className='py-2'>
                {name}
              </Link>
            </div>
          </div>
        );
      })}
    </Flip>
  );
};
export default withRouter(TvItemView);

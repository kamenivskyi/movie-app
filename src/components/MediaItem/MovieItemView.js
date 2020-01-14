import React, { useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import FirebaseContext from '../../context/firebase/firebaseContext';
import config from '../../config';
import NotFoundImage from './not-found.jpg';
import './MediaItem.css';

const MovieItemView = ({ array, type, history }) => {
  const { large } = config.API_IMAGE;
  const { deleteBookmark } = useContext(FirebaseContext);
  const isProfilePage = history.location.pathname === '/profile';
  return (
    <>
      {array.map((item, idx) => {
        const { title, poster_path, vote_average, id } = item;
        const image = poster_path ? large + poster_path : NotFoundImage;

        return (
          <div className='col-sm-6 col-md-4 col-lg-3 mb-3' key={id}>
            <div className='card'>
              <img className='img-fluid' src={image} alt={title} />
              <span className='badge badge-success position-absolute my-1'>
                Rating: {vote_average}
              </span>
              {isProfilePage && (
                <button
                  className='btn btn-warning delete-bookmark'
                  onClick={() => deleteBookmark(idx, 'movie')}
                  title='delete bookmark'
                >
                  <i className='fas fa-trash-alt'></i>
                </button>
              )}
              <Link to={`/${type || 'movie'}/${id}`} className='py-2'>
                {title}
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default withRouter(MovieItemView);

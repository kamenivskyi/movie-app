import React, { useEffect, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

import FirebaseContext from '../../../context/firebase/firebaseContext';

import MediaItems from '../../layout/MediaItems';
import Spinner from '../../common/Spinner';

const UserBookmarks = () => {
  const { getBookmarks, currentUser, bookmarks, loading } = useContext(
    FirebaseContext
  );

  const [term, setTerm] = useState('');

  const { tv, movie } = bookmarks;

  useEffect(() => {
    getBookmarks();
  }, []);

  const search = (array, term, type) => {
    return array.filter(item =>
      item[type].toLowerCase().includes(term.toLowerCase())
    );
  };

  const visibleMovies = movie && search(movie, term, 'title');
  const visibleTvs = tv && search(tv, term, 'name');

  const handleChange = ({ target: { value } }) => {
    setTerm(value);
  };

  if (currentUser) {
    return (
      <div className='jumbotron'>
        <div className='container'>
          <h1 className='section-title mb-3'>Bookmarks</h1>
          <InputSearch term={term} onChange={handleChange} />
          <hr className='my-4' />
          <div className='row'>
            {loading && <Spinner />}

            {tv && tv.length === 0 && movie && movie.length === 0 ? (
              <p className='text-center w-100'>Your bookmarks list is empty</p>
            ) : (
              ''
            )}

            {visibleMovies && <MediaItems items={visibleMovies} type='movie' />}
            {visibleTvs && <MediaItems items={visibleTvs} type='tv' />}
          </div>
        </div>
      </div>
    );
  } else {
    return <Redirect to='/' />;
  }
};

const InputSearch = ({ onChange }) => (
  <input
    type='search'
    className='form-control'
    placeholder='search bookmark'
    onChange={onChange}
  />
);

export default UserBookmarks;

import React, { useEffect, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import FirebaseContext from '../../../context/firebase/firebaseContext';
import MediaItems from '../../MediaItems';
import Spinner from '../../common/Spinner';

const UserBookmarks = () => {
  const { isLoggedIn, getBookmarks, bookmarks, loading } = useContext(
    FirebaseContext
  );

  const [term, setTerm] = useState('');

  const { tvs, movies } = bookmarks;

  useEffect(() => {
    getBookmarks();
  }, []);

  const search = (array, term, property) => {
    return array.filter(item =>
      item[property].toLowerCase().includes(term.toLowerCase())
    );
  };

  const visibleMovies = movies && search(movies, term, 'title');
  const visibleTvs = tvs && search(tvs, term, 'name');

  const handleChange = ({ target: { value } }) => {
    setTerm(value);
  };

  if (isLoggedIn) {
    return (
      <div className='jumbotron'>
        <h1 className='display-4'>Bookmarks:</h1>
        <InputSearch term={term} onChange={handleChange} />
        <hr className='my-4' />
        <div className='row'>
          {loading && <Spinner />}
          {tvs && tvs.length === 0 ? 'Your bookmarks list is empty' : ''}
          {visibleMovies && <MediaItems items={visibleMovies} type='movie' />}
          {visibleTvs && <MediaItems items={visibleTvs} type='tv' />}
        </div>
      </div>
    );
  } else {
    return <Redirect to='/' />;
  }
};

const InputSearch = ({ onChange }) => {
  return (
    <input
      type='search'
      className='form-control'
      placeholder='search bookmark'
      onChange={onChange}
    />
  );
};
export default UserBookmarks;

import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import FirebaseContext from '../../../context/firebase/firebaseContext';

const DeleteBookmarkButton = ({ item, type, history }) => {
  const { deleteBookmark } = useContext(FirebaseContext);

  const isProfilePage = history.location.pathname === '/profile/bookmarks';
  const onDelete = () => deleteBookmark(item, type);

  return (
    isProfilePage && (
      <button
        className='btn btn-warning delete-bookmark'
        onClick={onDelete}
        title='delete bookmark'
      >
        <i className='fas fa-trash-alt'></i>
      </button>
    )
  );
};

DeleteBookmarkButton.propTypes = {
  item: PropTypes.object,
  type: PropTypes.string
};
export default withRouter(DeleteBookmarkButton);

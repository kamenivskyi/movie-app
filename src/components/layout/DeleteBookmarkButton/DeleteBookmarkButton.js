import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import FirebaseContext from '../../../context/firebase/firebaseContext';
import { Button } from '../../proxy/Button';

const DeleteBookmarkButton = ({ item, type, history }) => {
  const { deleteBookmark } = useContext(FirebaseContext);

  const isProfilePage = history.location.pathname === '/profile/bookmarks';

  const onDelete = () => deleteBookmark(item, type);

  return (
    isProfilePage && (
      <Button
        className='btn btn-warning delete-bookmark'
        onClick={onDelete}
        title='delete bookmark'
        style={{
          position: 'absolute',
          right: '0'
        }}
      >
        <i className='fas fa-trash-alt'></i>
      </Button>
    )
  );
};

DeleteBookmarkButton.propTypes = {
  item: PropTypes.object,
  type: PropTypes.string
};

export default withRouter(DeleteBookmarkButton);

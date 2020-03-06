import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import FirebaseContext from '../../../context/firebase/firebaseContext';

import { Button } from '../Button';

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
        <FontAwesomeIcon icon={faTrash} />
      </Button>
    )
  );
};

DeleteBookmarkButton.propTypes = {
  item: PropTypes.object,
  type: PropTypes.string
};

export default withRouter(DeleteBookmarkButton);

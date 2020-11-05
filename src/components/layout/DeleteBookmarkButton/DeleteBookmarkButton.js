import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import firebase, { auth, db } from '../../../firebase/firebaseUtils';

import Button from '../Button';

const DeleteBookmarkButton = ({ item, type, history }) => {
  const isProfilePage = history.location.pathname === '/profile/bookmarks';

  const deleteBookmark = (bookmark, type) => {
    const user = auth.currentUser;

    if (user) {
      db.collection('userBookmarks')
        .doc(user.uid)
        .update({
          [type]: firebase.firestore.FieldValue.arrayRemove(bookmark),
        });
    }
  };

  const onDelete = () => deleteBookmark(item, type);

  return (
    isProfilePage && (
      <Button
        className='btn btn-warning delete-bookmark'
        onClick={onDelete}
        title='delete bookmark'
        style={{
          position: 'absolute',
          right: '0',
        }}
      >
        <FontAwesomeIcon icon={faTrash} />
      </Button>
    )
  );
};

DeleteBookmarkButton.propTypes = {
  item: PropTypes.object,
  type: PropTypes.string,
};

export default withRouter(DeleteBookmarkButton);

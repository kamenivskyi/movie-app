import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import Button from "../Button";
import { deleteBookmark } from "../../firebase/firebaseUtils";

const DeleteBookmarkButton = ({ deleteItem, type }) => {
  const history = useHistory();
  const isProfilePage = history.location.pathname === "/profile/bookmarks";

  const onDelete = () => deleteBookmark(deleteItem, type);
  return (
    isProfilePage && (
      <Button
        className="btn btn-warning delete-bookmark"
        onClick={onDelete}
        title="delete bookmark"
        style={{
          position: "absolute",
          right: "0",
        }}
      >
        <FontAwesomeIcon icon={faTrash} />
      </Button>
    )
  );
};

DeleteBookmarkButton.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    poster_path: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
  }),
  type: PropTypes.string,
};

export default DeleteBookmarkButton;

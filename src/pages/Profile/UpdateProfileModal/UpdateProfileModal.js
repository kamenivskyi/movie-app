import React, { useState } from "react";

import Button from "../../../components/Button";
import { updateUserProfile } from "../../../firebase/firebaseUtils";

const UpdateProfileModal = () => {
  const [name, setName] = useState("");

  const handleUpdateName = (e) => {
    e.preventDefault();
    updateUserProfile(name);
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="updateProfileInfo"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <form className="modal-content" onSubmit={handleUpdateName}>
          <div className="modal-header">
            <h5 className="modal-title" id="updateProfileInfo">
              Update username
            </h5>
            <Button className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </Button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your new nickname"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <Button className="btn btn-secondary" data-dismiss="modal">
              Close
            </Button>
            <Button type="submit" className="btn btn-primary">
              Save changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UpdateProfileModal;

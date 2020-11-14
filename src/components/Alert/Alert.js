import React, { useContext } from "react";
import AlertContext from "../../../context/alert/alertContext";
import Button from "../Button";

const Alert = () => {
  const { alert, removeAlert } = useContext(AlertContext);

  return (
    alert !== null && (
      <div
        className={`alert alert-${alert.type} alert-dismissible' role='alert`}
      >
        {alert.msg}
        <Button
          type="button"
          className="close"
          aria-label="Close"
          onClick={removeAlert}
        >
          <span aria-hidden="true">&times;</span>
        </Button>
      </div>
    )
  );
};

export default Alert;

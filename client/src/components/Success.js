import React from "react";
import { Alert } from "react-bootstrap";

const Success = ({ success }) => {
  return (
    <div>
      <Alert variant="success">
        {success}
      </Alert>
    </div>
  );
};

export default Success;

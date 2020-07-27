import React from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
const PrevPage = ({ className, color }) => {
  let history = useHistory();
  return (
    <Button
      color={color}
      className={className}
      onClick={() => history.goBack()}
    >
      Go Back
    </Button>
  );
};

export default PrevPage;

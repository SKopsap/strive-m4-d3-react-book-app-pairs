import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
function WarningSign({ text }) {
  const [show, setShow] = useState(false);
  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{text}</Alert.Heading>
        <p>{text}</p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default WarningSign;

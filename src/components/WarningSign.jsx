import { Alert, Button } from "react-bootstrap";
import React from "react";
class WarningSign extends React.Component {
  state = {
    show: false,
  };

  if(show) {
    return (
      <Alert
        variant="danger"
        onClose={() => this.setState({ show: false })}
        dismissible
      >
        <Alert.Heading>{this.props.text}</Alert.Heading>
        <p>{this.props.text}</p>
      </Alert>
    );
  }
  render() {
    return (
      <>
        <Button onClick={() => this.setState({ show: true })}>
          Show Alert
        </Button>
      </>
    );
  }
}
export default WarningSign;

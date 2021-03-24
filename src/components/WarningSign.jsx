import { Alert, Button } from "react-bootstrap";
import React from "react";
class WarningSign extends React.Component {
  state = {
    show: false,
  };

  render() {
    const { show } = this.state;
    const { text } = this.props;

    if (show) {
      return (
        <Alert
          variant="danger"
          onClose={() => this.setState({ show: false })}
          dismissible
        >
          <Alert.Heading>{text}</Alert.Heading>
          <p>{text}</p>
        </Alert>
      );
    }
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

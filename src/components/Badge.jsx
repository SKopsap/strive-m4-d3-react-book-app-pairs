import { Badge } from "react-bootstrap";
import React from "react";
class MyBadge extends React.Component {
  render() {
    return (
      <>
        <Badge variant={this.props.color}>{this.props.text}</Badge>
      </>
    );
  }
}
export default MyBadge;

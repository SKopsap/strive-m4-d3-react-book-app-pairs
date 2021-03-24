import React, { useState } from "react";
import { Card } from "react-bootstrap";

const SingleBook = ({ title, img }) => {
  const [shit, updatedShit] = useState(false);

  const toggleClass = () => updatedShit(!shit);
  return (
    <Card
      onClick={toggleClass}
      className={`mt-3 ${shit && "selected"}`}
      style={{ width: "250px" }}
    >
      <Card.Img src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;

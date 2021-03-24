import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";

const SingleBook = ({ title, img }) => {
  const [shit, updatedShit] = useState(false);

  const toggleClass = () => updatedShit(!shit);
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="book">
      <Card
        onClick={toggleClass}
        className={`mt-3 ${shit && "selected"}`}
        style={{ width: "18rem" }}
      >
        <Card.Img lazyLoad={true} src={img} height="350" />
        <Card.Body
          style={{
            height: "170px",
          }}
        >
          <Card.Title
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;

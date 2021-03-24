import { Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

function BookList({ fantasy }) {
  return (
    <div>
      <Row>
        {fantasy.map((book) => {
          return (
            <div key={book.asin}>
              <SingleBook name={book.asin} title={book.title} img={book.img} />
            </div>
          );
        })}
      </Row>
    </div>
  );
}

export default BookList;

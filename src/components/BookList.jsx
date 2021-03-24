import SingleBook from "./SingleBook";

function BookList({ fantasy }) {
  return (
    <div>
      {fantasy.map((book) => {
        return (
          <div key={book.asin}>
            <SingleBook name={book.asin} title={book.title} img={book.img} />
          </div>
        );
      })}
    </div>
  );
}

export default BookList;

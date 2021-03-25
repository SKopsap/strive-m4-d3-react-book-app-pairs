import SingleBook from './SingleBook'

function BookList({ fantasy, filterQuery }) {
  return (
    <div>
      {fantasy
        .filter((book) =>
          book.title.toLowerCase().includes(filterQuery.toLowerCase())
        )
        .map((book) => {
          return (
            <div key={book.asin}>
              <SingleBook name={book.asin} title={book.title} img={book.img} />
            </div>
          )
        })}
    </div>
  )
}

export default BookList

import React, { Component } from "react";
import SingleBook from "./SingleBook";

class BookList extends Component {
  render() {
    const { data } = this.props;
    const { selected } = this.props.data;

    console.log(data);
    return (
      <div>
        {data.fantasy.map((book) => {
          return (
            <div onClick={this.props.handleClass} key={book.asin}>
              <SingleBook
                title={book.title}
                className={selected ? "selected" : null}
                img={book.img}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default BookList;

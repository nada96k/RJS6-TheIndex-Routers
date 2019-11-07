import React, { Component } from "react";
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

class BookList extends Component {
  state = {
    filteredBooks: this.props.books
  };

  filterBooks = query => {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book =>
      `${book.title} `.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks: filteredBooks });
  };

  render() {
    const bookTable = this.state.filteredBooks.map(book => (
      <BookTable key={book.id} book={book} />
    ));
    // console.log("Props", props);
    return (
      <div>
        <h3>Books</h3>
        <SearchBar onChange={this.filterBooks} />
        <div className="row">
          <BookTable books={this.props.books} />
        </div>
      </div>
    );
  }
}

export default BookList;

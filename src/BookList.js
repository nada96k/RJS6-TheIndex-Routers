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
    this.setState({ filteredBooks });
  };

  filterBooksByColor = bookColor =>
    this.state.filteredBooks.filter(book => book.color === bookColor);

  render() {
    const bookColor = this.props.match.params.bookColor;
    let books = this.state.filteredBooks;
    if (bookColor) {
      books = this.filterBooksByColor(bookColor);
      console.log("books if color is clicked", books);
    }
    return (
      <div>
        <h3>Books</h3>
        <SearchBar handleFilter={this.filterBooks} />
        <div className="row">
          <BookTable books={books} />
        </div>
      </div>
    );
  }
}

export default BookList;

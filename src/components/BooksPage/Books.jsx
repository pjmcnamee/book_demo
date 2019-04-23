import React, { Component } from "react";
import BookCardCreator from "./BookCardCreator";
import { connect } from "react-redux";
import { getAllBooks } from "../../ducks/booksReducer";
import { getData } from "../../ducks/userReducer";

export class Books extends Component {
  componentDidMount() {
    this.props.getAllBooks();
    this.props.getData();
  }

  render() {
    return (
      <div className="book-main-holder">
        <h1 className="page-title">Books</h1>
        <div className="book-card-holder">
          {this.props.booksReducer.books.map(book => {
            return <BookCardCreator key={book.book_id} book={book} />
          })}
        </div>
      </div>
    );
  }
}

const mapState = reduxState => reduxState;

export default connect(
  mapState,
  { getAllBooks, getData }
)(Books);

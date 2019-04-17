import React, { Component } from "react";
import BookCardCreator from "./BookCardCreator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllBooks } from "../ducks/booksReducer";

export class Books extends Component {
  componentDidMount() {
    this.props.getAllBooks();
  }

  render() {
    return (
      <div className="book-main-holder">
        <h1 className="page-title">Books</h1>
        <Link to="/addBook">Add Book</Link>
        <div className="book-card-holder">
          {this.props.books.map(book => {
            return <BookCardCreator book={book} />
          })}
        </div>
      </div>
    );
  }
}

const mapState = reduxState => reduxState.booksReducer;

export default connect(
  mapState,
  { getAllBooks }
)(Books);

import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router-dom";

export class AddBookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book_title: "",
      book_desc: "",
      book_price: "",
      book_author_name: "",
      book_cover_img: ""
    };
  }

  handleInputChange = (type, e) => {
    this.setState({
      [type]: e.target.value
    });
  };

  cancleBooks = (e) => {
    e.preventDefault()
    this.setState({
      book_title: "",
      book_desc: "",
      book_price: "",
      book_author_name: "",
      book_cover_img: ""
    })
    this.props.history.push("/books");
  }

  addBook = async (e) => {
    e.preventDefault()
    const {
      book_title,
      book_desc,
      book_price,
      book_author_name,
      book_cover_img
    } = this.state;
    await axios.post('/api/addbook', {
      book_title,
      book_desc,
      book_price,
      book_author_name,
      book_cover_img
    });
    this.props.history.push("/books");
  };

  render() {
    return (
      <div className="component-holder">
        <h1 className="page-title">Add Book</h1>
        <Form>
          <Form.Group controlId="formBasicBookTitle">
            <Form.Label className="form-label">Book Title</Form.Label>
            <Form.Control
              required
              onChange={e => this.handleInputChange("book_title", e)}
              type="text"
              placeholder="Enter Title"
              value={this.state.book_title}
            />
          </Form.Group>

          <Form.Group controlId="formBasicDescription">
            <Form.Label className="form-label">Book Description</Form.Label>
            <Form.Control
              required
              onChange={e => this.handleInputChange("book_desc", e)}
              type="text"
              placeholder="Book Description"
              value={this.state.book_desc}
            />
          </Form.Group>

          <Form.Group controlId="formBasicBookPrice">
            <Form.Label className="form-label">Book Price</Form.Label>
            <Form.Control
              onChange={e => this.handleInputChange("book_price", e)}
              type="number"
              placeholder="Book Price"
              value={this.state.book_price}
            />
          </Form.Group>

          <Form.Group controlId="formBasicAuthorName">
            <Form.Label className="form-label">Author Name</Form.Label>
            <Form.Control
              required
              onChange={e => this.handleInputChange("book_author_name", e)}
              type="text"
              placeholder="Author Name"
              value={this.state.book_author_name}
            />
          </Form.Group>

          <Form.Group controlId="formBasicBookCoverImage">
            <Form.Label className="form-label">Book Cover Image</Form.Label>
            <Form.Control
              required
              onChange={e => this.handleInputChange("book_cover_img", e)}
              type="text"
              placeholder="Book Cover Image"
              value={this.state.book_cover_img}
            />
          </Form.Group>

          <div className="register-buttons">
              <Button onClick={(e) => this.cancleBooks(e)} variant="primary" type="submit">
                Cancel
              </Button>
            <Button onClick={(e) => this.addBook(e)} variant="primary" type="submit">
              Add Book
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default withRouter(AddBookForm);
